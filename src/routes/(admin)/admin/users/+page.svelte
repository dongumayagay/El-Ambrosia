<script lang="ts">
	import type { UserRecord } from 'firebase-admin/auth';
	import CreateUser from './CreateUser.svelte';
	import LoadingUsers from './LoadingUsers.svelte';
	import Refresh from './Refresh.svelte';
	import TableUserRow from './TableUserRow.svelte';

	const loadUsers = async () => (users = await (await fetch('/api/users')).json());

	let users: UserRecord[];
	loadUsers();
</script>

<header>
	<CreateUser />
	<Refresh {loadUsers} />
</header>
<div class="w-full overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Photo</th>
				<th>Name</th>
				<th>Email Address</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#if users === undefined}
				<LoadingUsers />
			{:else}
				{#each users as user}
					<TableUserRow {user} />
				{:else}
					<tr>
						<td colspan="4">
							<h1 class="text-center">Fetching updated list of users...</h1>
						</td>
					</tr>
				{/each}
			{/if}
		</tbody>
	</table>
</div>
