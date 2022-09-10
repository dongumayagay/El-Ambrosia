<script>
	import { onMount } from 'svelte';

	import '../app.postcss';

	let loading = true;
	onMount(() => {
		loading = false;
	});
</script>

<div class=" h-full bg-black text-white">
	{#if loading}
		<div class="h-full flex flex-col justify-center items-center">
			<span class="text-orange-300 text-lg font-mestizo"> EL AMBROSIA </span>
		</div>
	{:else}
		<slot />
		<nav>test</nav>
	{/if}
</div>
