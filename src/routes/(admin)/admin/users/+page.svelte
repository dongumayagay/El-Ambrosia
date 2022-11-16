<script lang="ts">
	import { onMount } from 'svelte';
	import type { UserRecord } from 'firebase-admin/auth';
	let users: UserRecord[] = [];
	onMount(async () => {
		const response = await fetch('/api/users');
		users = await response.json();
	});
</script>

<div class="w-full overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Photo</th>
				<th>Name</th>
				<th>Email Address</th>
				<th>Phone Number</th>
				<th>Action</th>
			</tr>
		</thead>

		<tbody>
			{#each users as user}
				<tr class="">
					<th>
						<img
							class="w-16 h-16 avatar mask mask-circle"
							src={user.photoURL ?? 'https://i.pravatar.cc/64'}
							alt="Avatar Tailwind CSS Component"
						/>
					</th>
					<td>
						{user.displayName ?? 'N/A'}
					</td>
					<td>
						{user.email ?? 'N/A'}
					</td>
					<td>
						{user.phoneNumber ?? 'N/A'}
					</td>
					<th>
						<a href={`/admin/users/${user.uid}`} class="btn btn-secondary">open</a>
					</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
