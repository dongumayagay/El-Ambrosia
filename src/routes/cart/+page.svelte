<main class="flex-1 overflow-auto text-center px-4 flex flex-col gap-4">
	Your cart

	<div class=" flex items-stretch">
		<section class="flex-1">
			<img width="150" height="150" src={'https://via.placeholder.com/150.webp'} alt="" />
		</section>
		<section class="flex-1 flex flex-col items-start justify-between font-anton tracking-widest">
			<h1 class="bold text-red-600 font-anton tracking-wider text-lg">Underdog 6"</h1>
			<h1 class=" font-bold">Chicken</h1>
			<h1>₱69</h1>
			<input
				type="number"
				name=""
				id=""
				value="5"
				class="bg-transparent text-sm py-1 text-right w-1/2"
			/>
			<button class="bg-red-600 text-sm p-1">Remove</button>
		</section>
	</div>
	<div class=" flex items-stretch">
		<section class="flex-1">
			<img width="150" height="150" src={'https://via.placeholder.com/150.webp'} alt="" />
		</section>
		<section class="flex-1 flex flex-col items-start justify-between font-anton tracking-widest">
			<h1 class="bold text-red-600 font-anton tracking-wider text-lg">Bossman 12"</h1>
			<h1 class=" font-bold">Steak</h1>
			<h1>₱189</h1>
			<input
				type="number"
				name=""
				id=""
				value="2"
				class="bg-transparent text-sm py-1 text-right w-1/2"
			/>
			<button class="bg-red-600 text-sm p-1">Remove</button>
		</section>
	</div>

	<div class="mt-auto p-2 pb-4 flex text-xl flex-col font-anton tracking-wider">
		<h1 class="">Total Price: ₱723</h1>
		<button class="bg-red-600 px-2 py-1">Checkout</button>
	</div>

	<!-- <header class="">
		<h1 class="text-center text-red-600 text-2xl font-anton tracking-wider">
			Welcome to El Ambrosia
		</h1>
		<p class="text-center  font-anton tracking-wide font-medium">
			Home of Authentic Middle Eastern Shawarma
		</p>
	</header>

	<main class="flex flex-col gap-6 py-8">
		{#each products as product}
			<button class=" flex  gap-4 items-stretch">
				<section class="flex-1">
					<img width="150" height="150" src={product.image} alt="" />
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
	</main> -->
</main>
