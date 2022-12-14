<script lang="ts">
	import { EXTRA_MEAT, GARLIC_SAUCE } from '$lib/constants';
	import { cartStore } from '$lib/stores';
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
	let add_extra_meat: boolean;
	let add_extra_garlic_sauce: boolean;
	let fries: Variant | undefined;
	$: extra_meat = meat && EXTRA_MEAT.find((MEATS: Variant) => MEATS.name === meat.name);

	const submitHandler = () => {
		try {
			if (!meat) throw 'Please select meat option';

			const DEFAULT_MEAT_QUANTITY = 1;

			cartStore.addCartItem({
				name: `${meat.name} ${product?.name}${add_extra_meat ? '- Extra ' + meat.name : ''}`,
				price: add_extra_meat ? meat.price + (extra_meat?.price ?? 0) : meat.price,
				quantity: DEFAULT_MEAT_QUANTITY,
				subTotal: DEFAULT_MEAT_QUANTITY * meat.price,
				image: product?.image ?? ''
			});

			if (add_extra_garlic_sauce) {
				cartStore.addCartItem({
					image: '/images/garlic-sauce.png',
					name: GARLIC_SAUCE.name,
					price: GARLIC_SAUCE.price,
					quantity: 1,
					subTotal: GARLIC_SAUCE.price * 1
				});
			}

			if (fries) {
				cartStore.addCartItem({
					image: '/images/fries.png',
					name: 'Fries - ' + fries.name,
					price: fries.price,
					quantity: 1,
					subTotal: fries.price * 1
				});
			}
			cartStore.toggleShowSideCart();
		} catch (error) {
			toast.error(error as string);
		}
	};

	const calculate_subtotal = (
		meat: Variant,
		add_extra_meat: boolean,
		extra_meat: Variant | undefined,
		extra_garlic_sauce: boolean,
		fries: Variant | undefined
	) => {
		let temp_total = 0;
		if (meat) temp_total += meat.price;
		if (add_extra_meat && extra_meat) temp_total += extra_meat.price;
		if (extra_garlic_sauce) temp_total += GARLIC_SAUCE.price;
		if (fries) temp_total += fries.price;
		return temp_total;
	};

	$: subtotal = calculate_subtotal(meat, add_extra_meat, extra_meat, add_extra_garlic_sauce, fries);
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
				<InputExtraMeat {extra_meat} bind:add_extra_meat />
				<InputGarlicSauce bind:add_extra_garlic_sauce />
				<InputFries bind:fries />

				<h1 class="text-xl font-bold">??? {subtotal}</h1>
				<button type="submit" class=" btn btn-secondary gap-2">Add to Cart</button>
			</form>
		</section>
	</main>
</div>
