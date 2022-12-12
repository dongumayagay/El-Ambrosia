<script>
	import { cartStore } from '$lib/stores';
	import CheckoutBtn from './CheckoutBtn.svelte';
	import SideCartItem from './SideCartItem.svelte';
	import SideCartToggle from './SideCartToggle.svelte';
	const { cartItems, cartTotal } = cartStore;
</script>

<div class="drawer-side ">
	<label for="sideDrawerCart" class="drawer-overlay fixed inset-0" />
	<aside
		class="p-4 menu w-full max-w-lg bg-base-200 text-base-content gap-2	 border-red-500  fixed right-0 inset-y-0"
	>
		<header class="flex items-center justify-between ">
			<h1 class="text-xl font-semibold font-anton tracking-widest">Your Cart</h1>
			<SideCartToggle />
		</header>
		<main class="overflow-auto flex flex-col gap-4 ">
			{#each $cartItems as cartItem}
				<!-- Sidebar content here -->
				<SideCartItem {cartItem} />
			{:else}
				<h1 class="text-xl font-anton text-center">Your cart is empty</h1>
			{/each}
		</main>
		<CheckoutBtn />
	</aside>
</div>

<style>
	aside {
		display: grid;
		grid-template-rows: min-content auto;
	}
</style>
