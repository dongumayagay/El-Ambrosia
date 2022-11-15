<script lang="ts">
	import Navbar from './Navbar.svelte';
	import SideNav from './SideNav.svelte';

	let showSideNav: boolean;
</script>

<svelte:head>
	<title>Admin | El Ambrosia</title>
</svelte:head>

<div class="drawer drawer-mobile">
	<input id="sidenav" type="checkbox" class="drawer-toggle" bind:checked={showSideNav} />
	<div class="flex flex-col drawer-content bg-base-300 ">
		<Navbar />
		<slot />
	</div>
	<SideNav on:click={() => (showSideNav = false)} />
</div>
