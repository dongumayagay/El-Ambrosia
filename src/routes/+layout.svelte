<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import '../app.postcss';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Logo from '$lib/components/Logo.svelte';

	let loading = true;
	onMount(() => {
		loading = false;
	});
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>

<!-- <div class=" h-full min-h-full flex flex-col bg-black text-orange-100/75">
	
		<main class="flex-1 flex flex-col" in:fade={{ delay: 200 }}>
			<header class="flex justify-center py-4">
				<Logo />
			</header>
			<div class="flex-1 flex flex-col overflow-hidden">
				<slot />
				<main class="h-screen bg-green-500">a</main>
			</div>
			<Navbar />
		</main>
	{:else}
		<Loading />
	{/if}
</div> -->

<main class="h-full min-h-full flex flex-col text-orange-100/75">
	{#if !loading}
		<main in:fade={{ delay: 200 }} class="flex-1 flex flex-col overflow-hidden">
			<header class="flex justify-center py-4">
				<Logo />
			</header>

			<slot />
			<Navbar />
		</main>
	{:else}
		<Loading />
	{/if}
</main>
