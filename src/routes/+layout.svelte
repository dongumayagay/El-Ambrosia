<script lang="ts">
	import { Toaster } from 'svelte-french-toast';
	import { app } from '$lib/firebase/client';
	import { getAnalytics } from 'firebase/analytics';
	import '../app.postcss';
	import { browser } from '$app/environment';

	$: browser && getAnalytics(app);
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>

<slot />
<Toaster />
