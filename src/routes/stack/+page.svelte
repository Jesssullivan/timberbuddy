<script lang="ts">
	import CutCalculator from '#lib/CutCalculator.svelte';
	import { getStore } from '#lib/store.remote.js';

	const store = await getStore();
</script>

<CutCalculator initial={store.stack_height} storeKey="stack_height" localKey="cut_size" step={0.1} maxChars={5} />
