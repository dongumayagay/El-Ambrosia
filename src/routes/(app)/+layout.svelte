<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import SideCart from './SideCart.svelte';
	import { showSideCart } from '$lib/stores';
</script>

<div class=" drawer drawer-end h-full">
	<input id="sideDrawerCart" type="checkbox" class="drawer-toggle" bind:checked={$showSideCart} />
	<div class=" drawer-content h-full">
		<Navbar />
		<slot />
		<Footer />
	</div>
	<SideCart />
</div>
