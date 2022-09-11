<script>
	import { products } from '$lib/stores';
</script>

<main class="overflow-auto text-center px-4">
	<header class="">
		<h1 class="text-center text-red-600 text-2xl font-anton tracking-wider">
			Welcome to El Ambrosia
		</h1>
		<p class="text-center  font-anton tracking-wide font-medium">
			Home of Authentic Middle Eastern Shawarma
		</p>
	</header>

	<main class="flex flex-col gap-6 py-8">
		{#each $products as product}
			<button class=" flex  gap-4 items-stretch">
				<section class="flex-1">
					<img width="300" height="300" src={product.image} alt="" />
				</section>
				<section class="flex-1 flex flex-col justify-between ">
					<h1 class="text-2xl text-red-600 uppercase font-anton text-start ">{product.name}</h1>
					<p class="text-xs">
						{product.description}
					</p>
					{#each product.product_variants as variant}
						<div class="flex justify-between font-anton tracking-wide text-orange-600 text-base">
							<span class="uppercase">{variant.name}</span>
							<span>₱{variant.price}</span>
						</div>
					{/each}
				</section>
			</button>
		{/each}
	</main>
</main>

<style>
	button:nth-child(even) {
		flex-direction: row-reverse;
	}
</style>
