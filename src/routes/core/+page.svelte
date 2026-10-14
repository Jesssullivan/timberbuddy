<script lang="ts">
	import CutCalculator from '#lib/CutCalculator.svelte';
	import { getStore } from '#lib/store.remote.js';

	const store = await getStore();
</script>

<CutCalculator initial={store.core_height} storeKey="core_height" localKey="core_size" step={1} />
