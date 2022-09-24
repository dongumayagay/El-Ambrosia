<script>
	import SideNavbar from '$lib/components/admin/SideNavbar.svelte';
	import TopNavbar from '$lib/components/admin/TopNavbar.svelte';
</script>

<svelte:head>
	<title>Admin | El Ambrosia</title>
</svelte:head>
<div class="drawer drawer-mobile h-full">
	<input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
	<div class="drawer-content bg-base-300">
		<TopNavbar />
	</div>
	<SideNavbar />
</div>
