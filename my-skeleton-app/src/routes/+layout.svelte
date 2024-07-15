<script lang="ts" xmlns="http://www.w3.org/1999/html">
	import '../app.postcss';
	import { AppShell, AppBar } from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	const year = new Date().getFullYear()

</script>

<!-- App Shell -->
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<strong class="text-xl uppercase">Timber Buddy</strong>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://discord.gg/EXqV7W8MtY"
					target="_blank"
					rel="noreferrer"
				>
					Read Manual
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://twitter.com/SkeletonUI"
					target="_blank"
					rel="noreferrer"
				>
					Toggle Network
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					Toggle Units
				</a>
				<a
					class="btn btn-sm variant-ghost-surface"
					href="https://github.com/skeletonlabs/skeleton"
					target="_blank"
					rel="noreferrer"
				>
					Support
				</a>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Page Route Content -->
	<slot />

	<svelte:fragment slot="footer">
		<!-- App Bar -->
		<AppBar class="!bg-transparent">
			<svelte:fragment slot="lead">
				<div class="absolute -mb-24 text-center opacity-80  grid grid-cols-1 gap-.5">
					<span class="text-sm">	&#169; Timber Buddy {year}</span>
					<span class="text-xs opacity-85 ">Engineered with care.</span>
					<span class="text-xs opacity-85">Jess Sullivan & Rossel & Co.</span>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<div class="btn-group font-bold rounded-tr-none rounded-br-none -mr-4 border-8">
				<button
					class=" variant-ghost-success !py-16 !text-3xl !px-8"
				>
					<span>
						Next Cut </span>
				</button>
				<button
					class=" variant-ghost-secondary !py-12 !text-3xl !px-8"
				>
					Set Ref
				</button>
				<button
					class=" variant-ghost-surface !py-12 !text-3xl !px-8"
				>
					Toggle Mode
				</button>
					<button
						class=" variant-ghost-warning !py-12 !text-3xl !px-8"
					>
						Raise
					</button>
				</div>
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

</AppShell>
