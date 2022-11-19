<script lang="ts">
	import type { UserRecord } from 'firebase-admin/auth';
	import Refresh from './Refresh.svelte';

	const loadUsers = async () => (users = await (await fetch('/api/users')).json());

	let users: UserRecord[];
	loadUsers();
</script>

<header>
	<a href="/admin/users/create" class="gap-2 btn btn-info"
		><svg
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
				d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
			/>
		</svg>
		Create User
	</a>
	<Refresh {loadUsers} />
</header>
<div class="w-full overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Photo</th>
				<th>Name</th>
				<th>Email Address</th>
				<!-- <th>Phone Number</th> -->
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#if users === undefined}
				<tr>
					<td colspan="4">
						<h1 class="flex items-center justify-center">
							<svg
								class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								/>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg> Fetching updated list of users...
						</h1>
					</td>
				</tr>
			{:else}
				{#each users as user}
					<tr class="">
						<th>
							<img
								class="w-16 h-16 avatar mask mask-circle object-cover"
								src={user.photoURL ?? `https://ui-avatars.com/api/?name=${user.displayName}`}
								alt="Avatar Tailwind CSS Component"
							/>
						</th>
						<td>
							{user.displayName ?? 'N/A'}
						</td>
						<td>
							{user.email ?? 'N/A'}
						</td>
						<!-- <td>
							{user.phoneNumber ?? 'N/A'}
						</td> -->
						<th>
							<a href={`/admin/users/${user.uid}`} class="gap-2 btn btn-secondary"
								><svg
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
										d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								VIEW</a
							>
						</th>
					</tr>
				{:else}
					No users
				{/each}
			{/if}
		</tbody>
	</table>
</div>
