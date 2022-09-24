<script>
	import BottomNavigation from '$lib/components/admin/BottomNavigation.svelte';
	import Navbar from '$lib/components/admin/Navbar.svelte';
</script>

<svelte:head>
	<title>Admin | El Ambrosia</title>
</svelte:head>

<div class=" h-full flex flex-col pb-16 sm:pb-0 pt-16 bg-base-300">
	<Navbar />
	<slot />
	<BottomNavigation />
</div>
