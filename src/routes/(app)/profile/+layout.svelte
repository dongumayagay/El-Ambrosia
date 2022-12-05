<script lang="ts">
	import { goto } from '$app/navigation';
	import Splash from '$lib/components/Splash.svelte';
	import { userStore } from '$lib/stores';
	import toast from 'svelte-french-toast';
	$: if ($userStore === null) {
		toast.error('you are not logged in');
		goto('/');
	}
	let checked: boolean;
</script>

{#if $userStore === undefined || $userStore === null}
	<Splash />
{:else if $userStore}
	<div class="drawer drawer-mobile">
		<input id="profile-sidebar" type="checkbox" class="drawer-toggle" bind:checked />
		<div class="flex flex-col drawer-content bg-base-200">
			<!-- Page content here -->
			<slot />
		</div>
		<div class="drawer-side">
			<label for="profile-sidebar" class="drawer-overlay" />
			<nav class="menu p-4 w-80 bg-base-100 text-base-content gap-4">
				<!-- Sidebar content here -->
				<a on:click={() => (checked = false)} class="btn gap-2" href="/profile"
					>Contact Information</a
				>
				<a on:click={() => (checked = false)} class="btn gap-2" href="/profile/address">Address</a>
			</nav>
		</div>
	</div>
{/if}
