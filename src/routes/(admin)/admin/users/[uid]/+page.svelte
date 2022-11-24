<script lang="ts">
	import type { UserRecord } from 'firebase-admin/auth';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import DeleteUser from './DeleteUser.svelte';
	import MakeAnAdmin from './MakeAnAdmin.svelte';
	import UnmakeAnAdmin from './UnmakeAnAdmin.svelte';

	const loadUser = async () => (user = await (await fetch(`/api/users/${data.uid}`)).json());

	export let data: PageData;
	let user: UserRecord;

	loadUser();
	$: isAdmin = user?.customClaims?.admin;
</script>

{#if user}
	<main>
		<h1>UID:{user.uid}</h1>
		<h1>NAME:{user.displayName}</h1>
		<h1>EMAIL: {user.email} - {user.emailVerified ? 'verified' : 'not verified'}</h1>
		<h1>PHONE: {user.phoneNumber}</h1>
		<h1>DATE ACCOUNT CREATED: {user.metadata.creationTime}</h1>
		<h1>LAST SIGNIN: {user.metadata.lastSignInTime}</h1>
		<img
			class="w-16 h-16 avatar mask mask-circle"
			src={user.photoURL ?? `https://ui-avatars.com/api/?name=${user.displayName}`}
			alt="Avatar Tailwind CSS Component"
		/>
		<h1>{isAdmin ? 'admin' : 'not an admin'}</h1>
		<DeleteUser {user} />
		{#if isAdmin}
			<UnmakeAnAdmin {user} on:refresh={loadUser} />
		{:else}
			<MakeAnAdmin {user} on:refresh={loadUser} />
		{/if}
		<!-- <button>View {user.displayName}' Order history</button> -->
	</main>
{:else}
	<main class="grid h-full place-items-center">
		<h1 class="flex items-center p-4 text-lg font-medium">
			<svg
				class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
			Fetching updated information of User: {data.uid}
		</h1>
	</main>
{/if}
