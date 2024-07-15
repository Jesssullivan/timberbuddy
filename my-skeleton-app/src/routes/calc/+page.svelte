<script lang="ts">
	let display_number = "";
	let operand: number | string;
	let operator: number | string;
	let result: number | string;
	let operators = ["+", "-", "*", "/"];
	const select = (num: number) => () => (display_number += num);

	function operation(sign: number | string) {
		operand = Number(display_number);
		console.log(operand)
		operator = sign;
		display_number = "";
	}

	function equals() {
		display_number = Number(display_number);
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
</script>

	<div class="h-24 p-8 m-2 w-full text-right text-2xl">{display_number.length < 23? display_number: display_number.substring(0,23)}</div>
	<div class="grid grid-cols-4 gap-3">
		<button on:click={select(7)}>7</button>
		<button on:click={select(8)}>8</button>
		<button on:click={select(9)}>9</button>
		<button on:click={() => operation(operators[0])} class="operator" >+</button>
		<button on:click={select(4)}>4</button>
		<button on:click={select(5)}>5</button>
		<button on:click={select(6)}>6</button>
		<button on:click={() => operation(operators[1])} class="operator" >-</button>
		<button on:click={select(1)}>1</button>
		<button on:click={select(2)}>2</button>
		<button on:click={select(3)}>3</button>
		<button on:click={() => operation(operators[2])} class="operator">*</button>
		<button on:click={select(0)}>0</button>
		<button on:click={select(".")}>.</button>
		<button on:click={clear} class="clear">C</button>
		<button on:click={() => operation(operators[3])} class="operator">/</button>
		<button on:click={equals} class="equals" >=</button>
	</div>

<style>

    button {
        padding: 10px;
        font-size: 18px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        text-align: center;
    }
    button:hover{
        background: #444444;
    }
    .operator{
        border: 0px solid #A46D19;
        background: #F90;
    }
    .operator:hover{
        background: #FFD700;
    }
    .clear{
        border: 0px solid #000;
        background: red;
    }
    .clear:hover {
        background: #FFC0CB ; /* Change background color on hover */
    }
    .equals{
        border: 0px solid #000;
        background: #245BE9;
        width: 320px
    }
    .equals:hover {
        background: #ADD8E6; /* Change background color on hover */
    }
</style>

