<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import Footer from './Footer.svelte';
</script>

<main class="h-full">
	<Navbar />
	<slot />
	<Footer />
</main>
