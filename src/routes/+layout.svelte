<script lang="ts">

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
	const defaultOdometerValue = data.read_defaults.core_height;

	const initialOdometerValue = browser ?
			window.localStorage.getItem('odo_value') ??
			defaultOdometerValue :
			defaultOdometerValue;

	const odo_value = writable<string>(initialOdometerValue);

	odo_value.subscribe((value) => {
		if (browser) {
			window.localStorage.setItem('odo_value', value);
		}
	});

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import {io} from "socket.io-client";
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

	$: core_name = $page.url.pathname.split('/')[1] === '' ?  '🏠 '  :cml($page.url.pathname.split('/')[1] + ' mode')

	// @todo: copy pasta below to start working on node button io stuff

	// const socket = io(); //load socket.io-client and connect to the host that serves the page
	// window.addEventListener("load", function(){ //when page loads
	// 	var lightbox = document.getElementById("light");
	// 	lightbox.addEventListener("change", function() { //add event listener for when checkbox changes
	// 		socket.emit("light", Number(this.checked)); //send button status to server (as 1 or 0)
	// 	});
	// });
	// socket.on('light', function (data) { //get button status from client
	// 	document.getElementById("light").checked = data; //change checkbox according to push button on Raspberry Pi
	// 	socket.emit("light", data); //send push button status to back to server
	// });

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
					🪚 <span class="animate-pulse">{$odo_value}</span>
					<span class="italic"> Stats ⤤</span>
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

