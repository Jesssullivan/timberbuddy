<script lang="ts">
	const year = new Date().getFullYear();
</script>

<div class="container h-full mx-auto flex justify-center items-center">
	<div class="space-y-10 text-center flex flex-col items-center">
		<h1 class="h1">Timber Buddy Control Surface</h1>

		<div class="flex justify-center space-x-2">
			<a
				class="btn variant-filled"
				href="/stack"
				rel="noreferrer"
			>
				Enter Stack Mode &#10166;
			</a>
		</div>
		<div class="space-y-2">
			<div class=" text-center opacity-80  grid grid-cols-1 gap-.5">
				<span class="text-sm">	&#169; Timber Buddy {year}</span>
				<span class="text-xs opacity-85 ">Engineered with care.</span>
				<span class="text-xs opacity-85">Jess Sullivan & Rossel & Co.</span>
			</div>
		</div>
	</div>
</div>

