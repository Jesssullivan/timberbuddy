<script lang="ts">
	import io from 'socket.io-client';
	import '../app.postcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import {
		goto,
	} from '$app/navigation';

	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	// init store values
	export let data;

	// core store values
	const defaultOdometerValue = data.read_defaults.odo_value;

	onMount(async () => {
		window.localStorage.setItem('odo_value', defaultOdometerValue);
	});

	const odo_value = writable<string>(defaultOdometerValue);

	odo_value.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('odo_value', value);
		}
	});

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import {onMount} from "svelte";
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


	const cml = (str: string) => {
		return str.replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
			return index == 0 ? word.toUpperCase() : word.toUpperCase();
		}).replace(/\s+/g, ' ');
	}

	const update_odo = async () => {
		const response = await fetch('/', {
			method: 'POST',
			body: JSON.stringify({
				key: "odo_value",
				new_cut_size: Number($odo_value) + 1
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		const res = await response.json();
		console.log(res)
	}

	const add_cut = () => {
		update_odo();
		let result = Number($odo_value) + 1;
		odo_value.set(result.toString())
	}

	const toggle_mode = () => $page.url.pathname.includes('stack') ? goto('/core') : goto('/stack')

	$: core_name = $page.url.pathname.split('/')[1] === '' ?  'Home'  :cml($page.url.pathname.split('/')[1] + ' mode')

	const socket = io(); //load socket.io-client and connect to the host that serves the page

	const socketBtnHandler = (el_id: string, socket_id=el_id) => {

		const handleBtnEl: HTMLButtonElement = document.getElementById(el_id) as HTMLButtonElement;

		if (handleBtnEl) {
			// handle socket tx:
			handleBtnEl.addEventListener("click", () => {
				socket.emit(socket_id, true);
				handleBtnEl.disabled=true;
			});
			// handle socket rx:
			socket.on(socket_id, (data) => {
				if (data) {
					handleBtnEl.click();
					handleBtnEl.disabled=true;
				} else {
					handleBtnEl.disabled=false;
				}
			});
		}
	}

	onMount(() => {
		socketBtnHandler('raiseBtn');
		socketBtnHandler('nextCutBtn');
		socketBtnHandler('setRefBtn');
		socketBtnHandler('toggleBtn');
	});

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar class="max-h-24">
			<svelte:fragment slot="lead">
				<a href="/" class="flex flex-col justify-center text-center">
					<strong class="text-lg uppercase">Timber Buddy</strong>
					<p class="text-sm  hover:animate-pulse">{core_name}</p>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button
						class="btn btn-sm variant-ghost-surface"
				>
					 <span class="animate-pulse">{$odo_value}</span>
					<span class="italic"> Cuts ⤤</span>
				</button>
				<button
					class="btn btn-sm variant-ghost-surface"
				>
					Read Manual
				</button>
				<button
					class="btn btn-sm variant-ghost-surface"
				>
					Toggle Network
				</button>
				<button
					class="btn btn-sm variant-ghost-surface"
				>
					Support
				</button>
				<button
					class="btn"
				>
					<LightSwitch height="h-8" width="w-16" />
				</button>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="footer">

				<div class="grid grid-cols-4 font-bold -mr-4 border-2">
				<button on:click={add_cut}
					class=" btn rounded-none variant-ghost-success !py-6 md:text-xl xl:!text-2xl !px-8"
					id="nextCutBtn"
				>
					<span>
						Next Cut </span>
				</button>
				<button
					class=" btn rounded-none variant-ghost-secondary md:text-xl xl:!text-2xl !px-8"
					id="setRefBtn"
				>
					Set Ref
				</button>
				<button on:click={toggle_mode}
					class=" btn rounded-none variant-ghost-surface md:text-xl xl:!text-2xl"
					id="toggleBtn"
				>
					Toggle Mode
				</button>
				<button
					class=" btn rounded-none variant-ghost-warning md:text-xl xl:!text-2xl !px-8"
					id="raiseBtn"
				>
					Raise
				</button>
				</div>
			</svelte:fragment>


</AppShell>

