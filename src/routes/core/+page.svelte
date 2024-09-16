<script lang="ts">
	import { Equal } from 'lucide-svelte';
	import {browser} from "$app/environment";
	import {writable} from "svelte/store";
	export let data;

	const defaultStackValue = data.read_defaults.core_height;

	const core_cut_size = writable<string>(defaultStackValue.toString());

	const update_cut_size = async () => {
		const response = await fetch('/', {
			method: 'POST',
			body: JSON.stringify({
				key: "core_height",
				new_cut_size: $core_cut_size
			}),
			headers: {
				'content-type': 'application/json'
			}
		});

		const res = await response.json();
		console.log(res)
	}

	core_cut_size.subscribe((value) => {
		if (browser) {
			update_cut_size()
			window.localStorage.setItem('core_size', value);
		}
	});

	$: display_number = $core_cut_size;
	let operand: number | string;
	let operator: number | string;
	let result: number | string;
	let operators = ["+", "-", "*", "/"];

	const select = (num: number | string) => () => {
		display_number += num.toString();
	};

	const operation = (sign: number | string) => {
		operand = Number(display_number);
		operator = sign;
		display_number = "";
	}

	const equals = () => {
		let display_number_num = Number(display_number);
		operand = Number(operand)
		if (operator === "+") {
			result = operand + display_number_num;
		} else if (operator === "-") {
			result = operand - display_number_num;
		} else if (operator === "*") {
			result = operand * display_number_num;
		} else if (operator === "/") {
			result = operand / display_number_num;
		}
		display_number = result.toString()
		core_cut_size.set(display_number)
	}

	const clear = () => (display_number = "");

	const larger_cut = () => {
		let display_number_num = Number(display_number);
		result = display_number_num + 1;
		display_number = result.toString()
		core_cut_size.set(display_number)
	}

	const smaller_cut = () => {
		let display_number_num = Number(display_number);
		result = display_number_num - 1;
		display_number = result.toString()
		core_cut_size.set(display_number)

	}

	let innerWidth = 0
	let innerHeight = 0


	$: getNumString = (Math.round(Number(display_number) * 100) / 100).toString()
	$: showNumString = getNumString !== '' ? getNumString += '"': getNumString += ''

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex">

	<div class="w-3/5 text-2xl pl-1">
		<div class="h-14 my-1 text-right text-2xl variant-soft-tertiary ">
			<button on:click={equals} class="w-2/6 h-full float-left font-bold btn variant-ghost-success rounded-l" ><Equal size="{48}" /></button>
			<button on:click={equals} class="w-4/6 h-full  font-bold " ></button>
		</div>
		<div class=" container m-auto  grid grid-cols-4  gap-x-2 gap-y-1 ">
			<button class="btn min-h-14  variant-soft-primary rounded-none" on:click={select(7)}>7</button>
			<button class="btn  variant-soft-primary rounded-none" on:click={select(8)}>8</button>
			<button class="btn  variant-soft-primary rounded-none" on:click={select(9)}>9</button>
			<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[0])}>+</button>

			<button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" on:click={select(4)}>4</button>
			<button class="btn  variant-soft-primary rounded-none" on:click={select(5)}>5</button>
			<button class="btn  variant-soft-primary rounded-none" on:click={select(6)}>6</button>
			<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[1])} >-</button>

			<button class="btn min-h-14 lg:min-h-26 variant-soft-primary rounded-none" on:click={select(1)}>1</button>
			<button class="btn  variant-soft-primary rounded-none" on:click={select(2)}>2</button>
			<button class="btn  variant-soft-primary rounded-none" on:click={select(3)}>3</button>
			<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[2])}>*</button>

			<button class="btn min-h-14 lg:min-h-26  variant-soft-primary rounded-none" on:click={select(0)}>0</button>
			<button class="btn  variant-soft-tertiary rounded-none" on:click={select(".")}>.</button>
			<button class="btn  variant-soft-error rounded-none" on:click={clear}>Clear</button>
			<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[3])}>/</button>

		</div>
	</div>

	<div class="float-right w-2/5">
		<div class=" h-full mx-auto  justify-center items-center">
			<div class="text-center items-center pt-12">
				<span class=" pl-2 text-jumbo">{showNumString}</span>
				<div class=" pt-6 flex justify-center space-x-2">
					<span class="text-2xl italic pb-8">Cut Size</span>
				</div>
				<div class="  btn-group-vertical variant-soft-primary">
					<button on:click={larger_cut} class=" w-64 h-14"><span class="h3">Larger Cut &#8593;</span></button>
					<button  on:click={smaller_cut} class=" w-64 h-14"><span class="h3">Smaller Cut &#8595;</span> </button>
				</div>

			</div>
		</div>

	</div>

</div>
