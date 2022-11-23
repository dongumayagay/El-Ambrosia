<script lang="ts">
	import { EXTRAS, EXTRA_MEAT } from '$lib/constants';
	import type { Variant } from '$lib/types';
	import toast from 'svelte-french-toast';
	import type { PageData } from './$types';
	import InputExtraMeat from './InputExtraMeat.svelte';
	import InputFries from './InputFries.svelte';
	import InputGarlicSauce from './InputGarlicSauce.svelte';
	import InputMeat from './InputMeat.svelte';

	export let data: PageData;
	const { product } = data;

	let meat: Variant;
	let extra_meat: boolean;
	let extra_garlic_sauce: boolean;
	let fries: Variant | undefined;

	const submitHandler = () => {
		try {
			if (!meat) throw 'Please select meat option';
			console.log({
				meat,
				extra_meat,
				extra_garlic_sauce,
				fries
			});
		} catch (error) {
			toast.error(error as string);
		}
	};

	const calculate_subtotal = (
		meat: Variant,
		extra_meat: boolean,
		extra_garlic_sauce: boolean,
		fries: Variant | undefined
	) => {
		let temp_total = 0;
		if (meat) temp_total += meat.price;
		if (meat && extra_meat) temp_total += EXTRA_MEAT[meat.name];
		if (extra_garlic_sauce) temp_total += EXTRAS['garlic sauce'];
		if (fries) temp_total += fries.price;
		return temp_total;
	};

	$: subtotal = calculate_subtotal(meat, extra_meat, extra_garlic_sauce, fries);
</script>

<div>
	<main class="flex flex-col w-full max-w-6xl gap-4 py-8 mx-auto sm:px-4 ">
		<h1 class="text-5xl tracking-widest text-center uppercase sm:text-6xl font-anton sm:text-left">
			{product?.name}
		</h1>
		<section class="flex flex-col flex-1 gap-4 sm:flex-row">
			<img
				src={product?.image}
				class="object-cover w-full lg:max-w-2xl sm:max-w-md aspect-square"
				alt=""
			/>
			<form
				on:submit|preventDefault={submitHandler}
				class="flex flex-col flex-1 gap-4 px-4 sm:px-0"
			>
				<InputMeat {product} bind:meat />
				<InputExtraMeat {meat} bind:extra_meat />
				<InputGarlicSauce bind:extra_garlic_sauce />
				<InputFries bind:fries />

				<h1 class="text-xl font-bold">Subtotal: ₱ {subtotal}</h1>
				<button type="submit" class=" btn btn-secondary gap-2">Add to Cart</button>
			</form>
		</section>
	</main>
</div>
