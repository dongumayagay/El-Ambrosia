<script>
	import { fade } from 'svelte/transition';
	// import { onMount } from 'svelte';
	import '../app.postcss';
	// import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import { products } from '$lib/stores';

	// let loading = true;
	export let data;
	$products = data.products;

	// onMount(() => {
	// 	loading = false;
	// });
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>

<main class="h-full min-h-full flex flex-col text-orange-100/75">
	<!-- {#if !loading} -->
	<main class="flex-1 flex flex-col overflow-hidden">
		<header class="flex justify-center py-4">
			<Logo />
		</header>
		<slot />
		<Navbar />
	</main>
	<!-- <main in:fade={{ delay: 50 }} class="flex-1 flex flex-col overflow-hidden">
		<header class="flex justify-center py-4">
			<Logo />
		</header>
		<slot />
		<Navbar />
	</main> -->
	<!-- {:else}
		<Loading />
	{/if} -->
</main>
