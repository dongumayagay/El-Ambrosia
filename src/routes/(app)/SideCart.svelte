<script>
	import SideCartToggle from './SideCartToggle.svelte';
</script>

<div class="drawer-side">
	<label for="sideDrawerCart" class="drawer-overlay" />
	<ul class="p-4 menu w-full max-w-lg bg-base-200 text-base-content">
		<div class="flex items-center justify-between">
			<h1 class="text-xl font-semibold">Your Cart</h1>
			<SideCartToggle />
		</div>
		<!-- Sidebar content here -->
		<!-- {#each $cartItems as cartItem}
			<li>
				{cartItem.name}
			</li>
		{:else}
			No Items
		{/each} -->
		<div class="flex gap-4 flex-row">
			<img
				src="/images/underdog.jpg"
				class=" aspect-square object-cover w-32 cursor-default hover:"
				alt=""
			/>
			<div class="grid grid-cols-2 gap-4">
				<h1>Underdog 6" - Chicken</h1>
				<h1>₱69</h1>
				<li>Extra chicken</li>
				<h1>₱25</h1>
				<label class="input-group">
					<span>Qty</span>
					<input type="number" value="1" class="input input-bordered w-24" />
				</label>
				<button class="btn text-error hover:bg-error/30 btn-circle btn-ghost">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
						/>
					</svg>
				</button>
			</div>
		</div>
	</ul>
</div>
