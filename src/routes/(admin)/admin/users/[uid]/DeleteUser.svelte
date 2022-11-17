<script lang="ts">
	import type { UserRecord } from 'firebase-admin/auth';
	import { goto } from '$app/navigation';
	import { enhance, applyAction, type SubmitFunction } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';
	export let user: UserRecord;
	let modal: boolean;

	let loading = false;

	const submitHandler: SubmitFunction = () => {
		loading = true;
		return async ({ result }: { result: ActionResult }) => {
			if (result.type === 'redirect') {
				await applyAction(result);
				await goto(result.location, { replaceState: true });
				return;
			} else if (result.type === 'error') {
				console.log(result.error);
				toast.error(result.error?.message ?? 'Error');
			}
			loading = false;
		};
	};
</script>

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

<input type="checkbox" id="delete-user-modal" class="modal-toggle" bind:checked={modal} />
<div class="fixed z-50 modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Delete User {user.displayName}?</h3>
		<p class="py-4">Are you sure about this? This user will be permanently deleted?</p>
		<div class="modal-action">
			<label for="delete-user-modal" class="btn btn-primary">I change my mind</label>
			<form action="?/delete" method="post" use:enhance={submitHandler}>
				<input type="hidden" name="uid" value={user.uid} />
				<button type="submit" class="btn btn-error" disabled={loading}>
					{#if loading}
						<svg
							class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
						</svg>
					{/if}
					Yes, I'm sure</button
				>
			</form>
		</div>
	</div>
</div>
