<script lang="ts">
	import { userStore } from '$lib/stores';
	import { auth } from '$lib/firebase/client';
	import { signOut } from 'firebase/auth';
	import { isAdmin } from '$lib/utils';
	import toast from 'svelte-french-toast';
	import { goto } from '$app/navigation';
	const logout = async () => {
		await signOut(auth);
		await goto('/auth/login');
		toast.success('logout successfully');
	};
</script>

<div class="dropdown dropdown-end">
	<button tabindex="0" class="btn btn-ghost btn-circle">
		<div class="indicator">
			{#if $userStore}
				<img
					src={$userStore.photoURL ?? `https://ui-avatars.com/api/?name=${$userStore.displayName}`}
					alt="profile"
					class=" w-6 rounded-full"
					referrerpolicy="no-referrer"
				/>
			{:else}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			{/if}
		</div>
	</button>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<ul
		tabindex="0"
		class="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-200 rounded-box w-52"
	>
		{#if $userStore}
			<li>
				<a href="/profile" class="justify-between"> Profile </a>
			</li>
			{#if isAdmin($userStore)}
				<li><a href="/admin">Admin</a></li>
			{/if}
			<li><button on:click={logout} href="/">Logout</button></li>
		{:else}
			<li><a href="/auth/login">Login</a></li>
			<li><a href="/auth/register">Register</a></li>
		{/if}
	</ul>
</div>
