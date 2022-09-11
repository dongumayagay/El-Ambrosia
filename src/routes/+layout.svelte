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

<div class="h-full bg-black text-orange-100/75 flex flex-col">
	{#if !loading}
		<main class="flex-1 flex flex-col" in:fade={{ delay: 200 }}>
			<header class="flex justify-center py-2">
				<Logo />
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
