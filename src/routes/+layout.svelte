<script lang="ts">
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.postcss';
</script>

<main class="h-full min-h-full pt-[50px]">
	<Navbar />
	<slot />
</main>
