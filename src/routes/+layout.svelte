<script lang="ts">
	import { app } from '$lib/firebase/client';
	import { getAnalytics } from 'firebase/analytics';
	import { onMount } from 'svelte';
	import '../app.postcss';

	onMount(() => getAnalytics(app));
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>

<slot />
