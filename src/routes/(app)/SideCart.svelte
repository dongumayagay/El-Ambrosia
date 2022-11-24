<script>
	import { cartStore } from '$lib/stores';
	import SideCartItem from './SideCartItem.svelte';
	import SideCartToggle from './SideCartToggle.svelte';
	const { cartItems } = cartStore;
</script>

<div class="drawer-side ">
	<label for="sideDrawerCart" class="drawer-overlay " />
	<ul
		class="p-4 menu w-full max-w-lg bg-base-200 text-base-content gap-4 flex flex-col fixed h-full border-red-500 "
	>
		<div class="flex items-center justify-between">
			<h1 class="text-xl font-semibold">Your Cart</h1>
			<SideCartToggle />
		</div>
		<!-- Sidebar content here -->
		{#each $cartItems as cartItem}
			<SideCartItem {cartItem} />
		{:else}
			No Items
		{/each}
	</ul>
</div>
