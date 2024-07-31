<script lang="ts" xmlns="http://www.w3.org/1999/html">
	import '../app.postcss';
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import {odo_value} from '$lib';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import {
		goto,
	} from '$app/navigation';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });


	const cml = (str: string) => {
		return str.replace(/^\w|[A-Z]|\b\w/g, function (word, index) {
			return index == 0 ? word.toUpperCase() : word.toUpperCase();
		}).replace(/\s+/g, ' ');
	}

	const add_cut = () => {
		let result = Number($odo_value) + 1;
		odo_value.set(result.toString())
	}

	const toggle_mode = () => $page.url.pathname === '/stack' ? goto('/core'): goto('/stack')

	$: core_name = $page.url.pathname.split('/')[1] === '' ?  '🏠 '  :cml($page.url.pathname.split('/')[1] + ' mode')


</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/" class="flex flex-col justify-center text-center">
					<strong class="text-lg uppercase">Timber Buddy</strong>
					<p class="text-sm  hover:animate-pulse">{core_name}</p>
				</a>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
						class="btn btn-sm variant-ghost-surface"
						href="#"
				>
					🪚 <span class="animate-pulse">{$odo_value}</span>
					<span class="italic"> Stats ⤤</span>
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
				>
					Read Manual
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
				>
					Toggle Network
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="#"
				>
					Support
				</a>
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
				>
					<span>
						Next Cut </span>
				</button>
				<button
					class=" btn rounded-none variant-ghost-secondary   md:text-xl xl:!text-2xl !px-8"
				>
					Set Ref
				</button>
				<button on:click={toggle_mode}
					class=" btn rounded-none variant-ghost-surface  md:text-xl xl:!text-2xl "
				>
					Toggle Mode
				</button>
					<button
						class="btn rounded-none variant-ghost-warning  md:text-xl xl:!text-2xl !px-8"
					>
						Raise
					</button>
				</div>
			</svelte:fragment>


</AppShell>

<!--<div class="absolute -mb-24 text-center opacity-80  grid grid-cols-1 gap-.5">-->
<!--	<span class="text-sm">	&#169; Timber Buddy {year}</span>-->
<!--	<span class="text-xs opacity-85 ">Engineered with care.</span>-->
<!--	<span class="text-xs opacity-85">Jess Sullivan & Rossel & Co.</span>-->
<!--</div>-->