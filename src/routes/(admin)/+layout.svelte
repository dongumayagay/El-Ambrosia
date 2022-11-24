<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Splash from '$lib/components/Splash.svelte';
	import { userStore } from '$lib/stores';
	import { isAdmin } from '$lib/utils';
	import type { User } from 'firebase/auth';
	import toast from 'svelte-french-toast';
	import Navbar from './Navbar.svelte';
	import SideNav from './SideNav.svelte';

	let loading = true;

	$: browser && checkIfAdmin($userStore);
	const checkIfAdmin = async (user: User | null | undefined) => {
		try {
			if (user === undefined) return;
			if (user === null) throw 'not logged in';
			if (!isAdmin(user)) throw 'not allowed';
			loading = false;
		} catch (error) {
			await goto('/');
			toast.error(error as string);
		}
	};

	let showSideNav: boolean;
</script>

<svelte:head>
	<title>Admin | El Ambrosia</title>
</svelte:head>

{#if loading}
	<Splash />
{:else}
	<div class="drawer drawer-mobile">
		<input id="adminsidenav" type="checkbox" class="drawer-toggle" bind:checked={showSideNav} />
		<div class="flex flex-col drawer-content bg-base-200 ">
			<Navbar />
			<slot />
		</div>
		<SideNav on:click={() => (showSideNav = false)} />
	</div>
{/if}
