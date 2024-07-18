<script lang="ts">
	import { Equal, Section } from 'lucide-svelte';

	let display_number: string | number = "";
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

	function equals() {
		display_number = Number(display_number);
		operand = Number(operand)
		if (operator === "+") {
			result = operand + display_number;
		} else if (operator === "-") {
			result = operand - display_number;
		} else if (operator === "*") {
			result = operand * display_number;
		} else if (operator === "/") {
			result = operand / display_number;
		}
		display_number = result.toString()
	}

	const clear = () => (display_number = "");
	let innerWidth = 0
	let innerHeight = 0

	$: getNumString = display_number.toString().length < 3? display_number: display_number.toString().substring(0,3)
	$: showNumString = getNumString !== ''? getNumString += '"': getNumString += ''

</script>

<svelte:window bind:innerWidth bind:innerHeight />

<div class="flex">

<div class="w-2/3 text-2xl">
	<div class="h-24 my-2 text-right text-2xl variant-soft-tertiary ">
		<button on:click={equals} class="w-2/6 h-full float-left font-bold btn variant-ghost-success rounded-l" ><Equal size="{48}" /></button>
		<button on:click={equals} class="w-4/6 h-full  font-bold " ></button>
	</div>
	<div class=" container m-auto  grid grid-cols-4  gap-x-2 gap-y-1 ">
		<button class="btn min-h-24 lg:min-h-32 variant-soft-primary rounded-none" on:click={select(7)}>7</button>
		<button class="btn  variant-soft-primary rounded-none" on:click={select(8)}>8</button>
		<button class="btn  variant-soft-primary rounded-none" on:click={select(9)}>9</button>
		<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[0])}>+</button>

		<button class="btn min-h-24 lg:min-h-32 variant-soft-primary rounded-none" on:click={select(4)}>4</button>
		<button class="btn  variant-soft-primary rounded-none" on:click={select(5)}>5</button>
		<button class="btn  variant-soft-primary rounded-none" on:click={select(6)}>6</button>
		<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[1])} >-</button>

		<button class="btn min-h-24 lg:min-h-32 variant-soft-primary rounded-none" on:click={select(1)}>1</button>
		<button class="btn  variant-soft-primary rounded-none" on:click={select(2)}>2</button>
		<button class="btn  variant-soft-primary rounded-none" on:click={select(3)}>3</button>
		<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[2])}>*</button>

		<button class="btn min-h-32 lg:min-h-32  variant-soft-primary rounded-none" on:click={select(0)}>0</button>
		<button class="btn  variant-soft-tertiary rounded-none" on:click={select(".")}>.</button>
		<button class="btn  variant-soft-error rounded-none" on:click={clear}>Clear</button>
		<button class="btn  variant-soft-warning rounded-none" on:click={() => operation(operators[3])}>/</button>

	</div>
</div>

<div class="float-right w-1/3">
	<div class=" h-full mx-auto flex justify-center items-center">
		<div class=" pt-16 space-y-10 text-center items-center ">

			<span class="pl-10 text-jumbo">{showNumString}</span>

			<div class=" pt-8 flex justify-center space-x-2">
				<span class="text-3xl italic pb-8">Cut Size</span>
			</div>
			<div class="  btn-group-vertical variant-soft-primary">
				<button class=" w-72 h-20"><span class="h3">Larger Cut &#8593;</span></button>
				<button class=" w-72 h-20"><span class="h3">Smaller Cut &#8595;</span> </button>
			</div>
		</div>
	</div>

</div>

</div>
