<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from '$lib/components/navbar/Footer.svelte';
	import SideCart from '$lib/components/cart/SideCart.svelte';
	import { cartStore } from '$lib/stores';

	const { isSideCartOpen } = cartStore;
</script>

<div class=" drawer drawer-end h-full">
	<input id="sideDrawerCart" type="checkbox" class="drawer-toggle" bind:checked={$isSideCartOpen} />
	<div class=" drawer-content h-full">
		<Navbar />
		<slot />
		<Footer />
	</div>
	<SideCart />
</div>
