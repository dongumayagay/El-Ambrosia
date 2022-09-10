<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import '../app.postcss';
	import Loading from '$lib/components/Loading.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let loading = true;
	onMount(() => {
		loading = false;
	});
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>

<div class="h-full bg-black text-white flex flex-col">
	{#if !loading}
		<main class="flex-1 flex flex-col" in:fade={{ delay: 200 }}>
			<header class="text-center py-2">
				<a href="/" class="text-orange-300 text-lg font-mestizo tracking-widest"> EL AMBROSIA </a>
			</header>
			<div class="flex-1 flex flex-col p-2">
				<slot />
			</div>
			<Navbar />
		</main>
	{:else}
		<Loading />
	{/if}
</div>
