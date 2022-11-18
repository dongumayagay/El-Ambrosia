<script lang="ts">
	import type { UserRecord } from 'firebase-admin/auth';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import DeleteUser from './DeleteUser.svelte';
	import MakeAnAdmin from './MakeAnAdmin.svelte';

	export let data: PageData;

	let user: UserRecord;
	onMount(async () => loadUser());
	const loadUser = async () => (user = await (await fetch(`/api/users/${data.uid}`)).json());
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
		<h1>{user.customClaims?.admin ? 'admin' : 'not an admin'}</h1>
		<DeleteUser {user} />
		<MakeAnAdmin {user} on:refresh={loadUser} />
	</main>
{:else}
	loading
{/if}
