<script lang="ts">
	import { Equal } from '@lucide/svelte';
	import { saveLocal } from './local.js';
	import { setCutSize } from './store.remote.js';
	import type { CutSizeKey } from './store-schema.js';

	type Operator = '+' | '-' | '*' | '/';

	let {
		initial,
		storeKey,
		localKey,
		step,
		maxChars,
	}: {
		/** The cut size read from store.json when the page loaded. */
		initial: number;
		storeKey: CutSizeKey;
		/** localStorage key the UI mirrors the value into. */
		localKey: string;
		/** How far "Larger Cut" / "Smaller Cut" move the value. */
		step: number;
		/** Truncate the large readout to this many characters. */
		maxChars?: number;
	} = $props();

	// Starts at the stored value; the keypad overrides it locally.
	let displayNumber = $derived(String(initial));
	let operand = 0;
	let operator: Operator | undefined;
	const operators: Operator[] = ['+', '-', '*', '/'];

	// Mirror every change to localStorage and persist finite values to
	// store.json. The first run records the loaded value without writing it back.
	let lastSaved: number | undefined;
	$effect(() => {
		const value = displayNumber;
		saveLocal(localKey, value);
		const n = Number(value);
		if (value.trim() === '' || !Number.isFinite(n)) return;
		if (lastSaved === undefined) {
			lastSaved = n;
			return;
		}
		if (n === lastSaved) return;
		lastSaved = n;
		setCutSize({ key: storeKey, value: n }).catch((error: unknown) => {
			console.log('unable to update store: ', error);
		});
	});

	const select = (num: number | string) => () => {
		displayNumber += String(num);
	};

	const operation = (sign: Operator) => {
		operand = Number(displayNumber);
		operator = sign;
		displayNumber = '';
	};

	const equals = () => {
		if (!operator) return;
		const current = Number(displayNumber);
		const result =
			operator === '+'
				? operand + current
				: operator === '-'
					? operand - current
					: operator === '*'
						? operand * current
						: operand / current;
		displayNumber = String(result);
	};

	const clear = () => {
		displayNumber = '';
	};

	// Round the step result so repeated 0.1 steps store 1.7, not 1.7000000000000002.
	const nudge = (delta: number) => {
		displayNumber = String(Math.round((Number(displayNumber) + delta) * 1e6) / 1e6);
	};

	const largerCut = () => nudge(step);

	const smallerCut = () => nudge(-step);

	const shown = $derived.by(() => {
		const text = String(Math.round(Number(displayNumber) * 100) / 100) + '"';
		return maxChars ? text.substring(0, maxChars) : text;
	});

	const key = 'btn rounded-none px-1 md:px-4';
	const digit = `${key} preset-tonal-primary min-h-14`;
	const op = `${key} preset-tonal-warning`;
</script>

<div class="flex">
	<div class="w-3/5 pl-1 text-base md:text-2xl">
		<div class="preset-tonal-tertiary my-1 h-14 text-right">
			<button
				onclick={equals}
				aria-label="Equals"
				class="btn preset-tonal-success border-success-500 float-left h-full w-2/6 rounded-l border font-bold"
				><Equal class="size-8 md:size-12" /></button
			>
			<button onclick={equals} aria-label="Equals" class="h-full w-4/6 font-bold"></button>
		</div>
		<div class="m-auto grid grid-cols-4 gap-x-2 gap-y-1">
			<button class={digit} onclick={select(7)}>7</button>
			<button class={digit} onclick={select(8)}>8</button>
			<button class={digit} onclick={select(9)}>9</button>
			<button class={op} onclick={() => operation(operators[0])}>+</button>

			<button class={digit} onclick={select(4)}>4</button>
			<button class={digit} onclick={select(5)}>5</button>
			<button class={digit} onclick={select(6)}>6</button>
			<button class={op} onclick={() => operation(operators[1])}>-</button>

			<button class={digit} onclick={select(1)}>1</button>
			<button class={digit} onclick={select(2)}>2</button>
			<button class={digit} onclick={select(3)}>3</button>
			<button class={op} onclick={() => operation(operators[2])}>*</button>

			<button class={digit} onclick={select(0)}>0</button>
			<button class="{key} preset-tonal-tertiary" onclick={select('.')}>.</button>
			<button class="{key} preset-tonal-error" onclick={clear}>Clear</button>
			<button class={op} onclick={() => operation(operators[3])}>/</button>
		</div>
	</div>

	<div class="w-2/5">
		<div class="pt-12 text-center">
			<span class="md:text-jumbo pl-2 text-2xl" data-testid="cut-size">{shown}</span>
			<div class="flex justify-center space-x-2 pt-6">
				<span class="pb-8 text-base italic md:text-2xl">Cut Size</span>
			</div>
			<div class="preset-tonal-primary rounded-base mx-auto flex w-full max-w-64 flex-col overflow-hidden">
				<button onclick={largerCut} class="h-14 w-full"
					><span class="text-sm font-bold md:text-xl">Larger Cut &#8593;</span></button
				>
				<button onclick={smallerCut} class="h-14 w-full"
					><span class="text-sm font-bold md:text-xl">Smaller Cut &#8595;</span></button
				>
			</div>
		</div>
	</div>
</div>
