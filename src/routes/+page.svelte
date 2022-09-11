<script>
	export let data;
	const products = data.products;
	console.log(products);
</script>

<header class="pb-4">
	<h1 class="text-center text-red-600 text-2xl font-anton tracking-wider">
		Welcome to El Ambrosia
	</h1>
	<p class="text-center  font-anton tracking-wide font-medium">
		Home of Authentic Middle Eastern Shawarma
	</p>
</header>

<main class="flex flex-col gap-6">
	{#each products as product}
		<button class=" flex  gap-4">
			<section class="flex-1">
				<img src={product.image} alt="" />
			</section>
			<section class="flex-1 flex flex-col h-full justify-between">
				<h1 class="text-3xl text-red-600 uppercase font-anton text-justify">{product.name}</h1>
				<p class="text-xs">
					{product.description}
				</p>
				{#each product.product_variants as variant}
					<div class="flex justify-between font-anton tracking-wider text-orange-600">
						<span class="uppercase">{variant.name}</span>
						<span>₱{variant.price}</span>
					</div>
				{/each}
			</section>
		</button>
	{/each}
</main>

<style>
	/* button {
		display: flex;
		flex-direction: row;
	} */
	button:nth-child(even) {
		flex-direction: row-reverse;
	}
</style>
