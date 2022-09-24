<script>
	import Navbar from '$lib/components/admin/Navbar.svelte';
	import SideDrawer from '$lib/components/admin/SideDrawer.svelte';
</script>

<svelte:head>
	<title>Admin | El Ambrosia</title>
</svelte:head>

<div class="drawer h-full">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col pt-16">
		<Navbar />
		<slot />
	</div>
	<SideDrawer />
</div>
