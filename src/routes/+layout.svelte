<script lang="ts">
	import '../app.css';
	import { onMount, type Snippet } from 'svelte';
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import { Moon, Sun } from '@lucide/svelte';
	import { io, type Socket } from 'socket.io-client';
	import { saveLocal } from '#lib/local.js';
	import { getStore, recordCut } from '#lib/store.remote.js';

	let { children }: { children: Snippet } = $props();

	// core store values
	const store = await getStore();
	let odoValue = $state(store.odo_value);

	$effect(() => {
		saveLocal('odo_value', String(odoValue));
	});

	const cml = (str: string) => str.replace(/^\w|[A-Z]|\b\w/g, (word) => word.toUpperCase()).replace(/\s+/g, ' ');

	const coreName = $derived.by(() => {
		const slug = page.url.pathname.split('/')[1];
		return slug === '' ? 'Home' : cml(slug + ' mode');
	});

	// Light / dark switch (Skeleton 5 has no LightSwitch component). src/app.html
	// applies the saved mode before first paint.
	let mode = $state<'light' | 'dark'>('dark');
	const toggleColorMode = () => {
		mode = mode === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-mode', mode);
		saveLocal('color-mode', mode);
	};

	let socket: Socket | undefined;

	const addCut = async () => {
		odoValue += 1;
		try {
			odoValue = await recordCut();
		} catch (error) {
			console.log('unable to record cut: ', error);
		}
	};

	const toggleMode = () => {
		socket?.disconnect();
		if (page.url.pathname.includes('stack')) {
			void goto(resolve('/core'));
		} else {
			void goto(resolve('/stack'));
		}
	};

	let raiseBtn = $state<HTMLButtonElement>();
	let nextCutBtn = $state<HTMLButtonElement>();
	let setRefBtn = $state<HTMLButtonElement>();
	let toggleBtn = $state<HTMLButtonElement>();

	onMount(() => {
		mode = document.documentElement.getAttribute('data-mode') === 'light' ? 'light' : 'dark';

		// load socket.io-client and connect to the host that serves the page
		const s = io();
		socket = s;

		// A panel button press goes to the node server as a socket event; a
		// physical button press arrives as the same event and clicks the button.
		const wire = (el: HTMLButtonElement | undefined, id: string) => {
			if (!el) return;
			el.addEventListener('click', () => {
				s.emit(id, true);
			});
			s.on(id, (data: boolean) => {
				if (data) el.click();
			});
		};
		wire(raiseBtn, 'raiseBtn');
		wire(nextCutBtn, 'nextCutBtn');
		wire(setRefBtn, 'setRefBtn');
		wire(toggleBtn, 'toggleBtn');

		s.on('disconnect', () => {
			console.log('recived socket complete, restarting connection');
			s.connect();
		});

		return () => {
			s.off();
			s.disconnect();
		};
	});

	const footerBtn = 'btn rounded-none px-2 md:px-8 md:text-xl xl:text-2xl!';
</script>

<div class="grid h-full grid-rows-[auto_1fr_auto]">
	<header class="bg-surface-100-900 flex max-h-24 flex-wrap items-center justify-between gap-2 p-2">
		<a href={resolve('/')} class="flex flex-col justify-center text-center">
			<strong class="text-lg uppercase">Timber Buddy</strong>
			<p class="text-sm hover:animate-pulse" data-testid="core-name">{coreName}</p>
		</a>
		<div class="flex flex-wrap items-center gap-1">
			<button class="btn btn-sm preset-tonal-surface border-surface-500 border">
				<span class="animate-pulse" data-testid="odo">{odoValue}</span>
				<span class="italic"> Cuts ⤤</span>
			</button>
			<button class="btn btn-sm preset-tonal-surface border-surface-500 hidden border md:inline-flex">
				Read Manual
			</button>
			<button class="btn btn-sm preset-tonal-surface border-surface-500 hidden border md:inline-flex">
				Toggle Network
			</button>
			<button class="btn btn-sm preset-tonal-surface border-surface-500 hidden border md:inline-flex"> Support </button>
			<button
				class="btn-icon preset-tonal-surface"
				onclick={toggleColorMode}
				aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
			>
				{#if mode === 'dark'}<Sun size={20} />{:else}<Moon size={20} />{/if}
			</button>
		</div>
	</header>

	<!-- Page Route Content -->
	<main class="overflow-y-auto">
		{@render children()}
	</main>

	<footer>
		<div class="grid grid-cols-4 border-2 font-bold">
			<button
				bind:this={nextCutBtn}
				onclick={addCut}
				class="{footerBtn} preset-tonal-success border-success-500 border py-6!"
				id="nextCutBtn"
			>
				<span>Next Cut</span>
			</button>
			<button
				bind:this={setRefBtn}
				class="{footerBtn} preset-tonal-secondary border-secondary-500 border"
				id="setRefBtn"
			>
				Drag
			</button>
			<button
				bind:this={toggleBtn}
				onclick={toggleMode}
				class="{footerBtn} preset-tonal-surface border-surface-500 border"
				id="toggleBtn"
			>
				Sides
			</button>
			<button bind:this={raiseBtn} class="{footerBtn} preset-tonal-warning border-warning-500 border" id="raiseBtn">
				Set Ref
			</button>
		</div>
	</footer>
</div>
