<script>
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';

	import '../app.postcss';

	let loading = true;
	onMount(() => {
		loading = false;
	});
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>

<div class=" h-full bg-black text-white flex flex-col overflow-hidden">
	{#if !loading}
		<div in:fade={{ delay: 200 }} class="flex-1 flex flex-col">
			<slot />
			<nav>test</nav>
		</div>
	{:else}
		<div
			out:fade
			class="fixed inset-0 flex flex-col justify-center items-center overflow-hidden bg-inherit"
		>
			<span class="text-orange-300 text-xl font-mestizo tracking-widest"> EL AMBROSIA </span>
		</div>
	{/if}
</div>
