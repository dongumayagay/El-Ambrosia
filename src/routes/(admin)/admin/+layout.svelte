<script>
	import AdminNavbar from '$lib/components/admin/AdminNavbar.svelte';
	import AdminSideDrawer from '$lib/components/admin/AdminSideDrawer.svelte';
</script>

<svelte:head>
	<title>Admin | El Ambrosia</title>
</svelte:head>

<div class="drawer h-full">
	<input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content flex flex-col pt-16">
		<AdminNavbar />
		<slot />
	</div>
	<AdminSideDrawer />
</div>
