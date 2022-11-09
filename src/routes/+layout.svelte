<script lang="ts">
	import { app } from '$lib/firebase';
	import { getAnalytics } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import '../app.postcss';
	
	onMount(() => {
		getAnalytics(app);
	});
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>
<main class="relative h-full min-h-full bg-base-300 ">
	<slot />
</main>
