<script lang="ts">
	import type { Variant } from '$lib/types';
	import type { PageData } from './$types';

	export let data: PageData;
	const { product } = data;

	let selected_variant = 0;
</script>

<div>
	<main class="flex flex-col w-full max-w-6xl gap-4 pt-20 mx-auto sm:px-4 ">
		<!--  -->
		<h1 class="text-5xl tracking-widest text-center uppercase sm:text-6xl font-anton sm:text-left">
			{product?.name}
		</h1>
		<section class="flex flex-col flex-1 gap-4 sm:flex-row">
			<img
				src={product?.image}
				class="object-cover w-full lg:max-w-2xl sm:max-w-md aspect-square"
				alt=""
			/>
			<div class="flex flex-col flex-1 gap-4 px-4 sm:px-0">
				{#each product?.variants ?? [] as variant, i}
					<label
						class="justify-between h-auto p-4 text-lg btn btn-outline"
						class:btn-active={selected_variant === i}
					>
						<input type="radio" class="hidden" bind:group={selected_variant} value={i} />
						<h1>{variant.name}</h1>
						<h1>₱ {variant.price}</h1>
					</label>
				{:else}
					No options
				{/each}
				{product?.variants[selected_variant].name}
			</div>
		</section>
	</main>
</div>
