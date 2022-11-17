<script lang="ts">
	import { goto } from '$app/navigation';
	import type { UserRecord } from 'firebase-admin/auth';

	export let user: UserRecord;
	let modal: boolean;

	const deleteUser = async () => {
		try {
			const response = await fetch(`/api/users/${user.uid}`, { method: 'DELETE' });
			console.log(response.status);
			await goto('/admin/users', { replaceState: true });
			modal = false;
		} catch (error) {
			console.log(error);
			alert(error);
		}
	};
</script>

<!-- The button to open modal -->
<label for="delete-user-modal" class="gap-2 btn btn-error"
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
			d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
		/>
	</svg>
	delete user
</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="delete-user-modal" class="modal-toggle" bind:checked={modal} />
<div class="fixed z-50 modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Delete User {user.displayName}?</h3>
		<p class="py-4">Are you sure about this? This user will be permanently deleted?</p>
		<div class="modal-action">
			<label for="delete-user-modal" class="btn btn-primary">I change my mind</label>
			<button on:click={deleteUser} class="btn btn-error">Yes, I'm sure</button>
		</div>
	</div>
</div>
