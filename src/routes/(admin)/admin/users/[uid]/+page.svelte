<script lang="ts">
	import type { UserRecord } from 'firebase-admin/auth';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import DeleteUser from './DeleteUser.svelte';

	export let data: PageData;

	let user: UserRecord;
	onMount(async () => {
		const response = await fetch(`/api/users/${data.uid}`);
		user = await response.json();
	});
</script>

{#if user}
	<h1>UID:{user.uid}</h1>
	<h1>NAME:{user.displayName}</h1>
	<h1>EMAIL: {user.email} - {user.emailVerified ? 'verified' : 'not verified'}</h1>
	<h1>PHONE: {user.phoneNumber}</h1>
	<h1>DATE ACCOUNT CREATED: {user.metadata.creationTime}</h1>
	<h1>LAST SIGNIN: {user.metadata.lastSignInTime}</h1>
	<img
		class="w-16 h-16 avatar mask mask-circle"
		src={user.photoURL ?? 'https://i.pravatar.cc/64'}
		alt="Avatar Tailwind CSS Component"
	/>
	<h1>{user.customClaims}</h1>
	<DeleteUser {user} />
{:else}
	loading
{/if}
