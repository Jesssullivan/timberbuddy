<script lang="ts">
	import { onMount } from 'svelte';
	import { resolve } from '$app/paths';
	import { io } from 'socket.io-client';

	const year = new Date().getFullYear();

	onMount(() => {
		const socket = io();
		socket.on('eventFromServer', (message: string) => {
			console.log(message);
		});
		return () => {
			socket.disconnect();
		};
	});
</script>

<div class="container mx-auto flex h-full items-center justify-center px-4">
	<div class="flex flex-col items-center space-y-10 text-center">
		<h1 class="h1">Timber Buddy Control Surface</h1>

		<div class="flex justify-center space-x-2">
			<a class="btn preset-filled" href={resolve('/stack')}> Enter Stack Mode &#10166; </a>
		</div>
		<div class="space-y-2">
			<div class="grid grid-cols-1 text-center opacity-80">
				<span class="text-sm">&#169; Timber Buddy {year}</span>
				<span class="text-xs opacity-85">Engineered with care.</span>
				<span class="text-xs opacity-85">Jess Sullivan & Rossel & Co.</span>
			</div>
		</div>
	</div>
</div>
