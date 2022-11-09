<script lang="ts">
	import BottomNavigation from '$lib/components/admin/BottomNavigation.svelte';
	import Navbar from '$lib/components/admin/Navbar.svelte';
	// import { page } from '$app/stores';
	// import { fade } from 'svelte/transition';
	// $: pathname = $page.url.pathname;
</script>

<svelte:head>
	<title>Admin | El Ambrosia</title>
</svelte:head>

<Navbar />
<!-- {#key pathname} -->
<div class="absolute inset-0 h-full pt-16 pb-16  sm:pb-0">
	<slot />
</div>
<!-- {/key} -->
<BottomNavigation />
