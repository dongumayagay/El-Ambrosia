<script lang="ts">
	import type { UserRecord } from 'firebase-admin/auth';
	import { goto } from '$app/navigation';
	import { enhance, applyAction, type SubmitFunction } from '$app/forms';
	import toast from 'svelte-french-toast';
	import { createEventDispatcher } from 'svelte';

	export let user: UserRecord;
	let modal: boolean;
	let loading = false;
	const dispatch = createEventDispatcher();

	const submitHandler: SubmitFunction = () => {
		loading = true;
		return async ({ result }) => {
			if (result.type === 'redirect') {
				await applyAction(result);
				await goto(result.location, { replaceState: true });
				return;
			} else if (result.type === 'error') {
				console.log(result.error);
				toast.error(result.error?.message ?? 'Error');
			} else if (result.type === 'success') {
				dispatch('refresh');
			}
			loading = false;
			modal = false;
		};
	};
</script>

<label for="unmake-user-admin-modal" class="gap-2 btn btn-warning">
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
			d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
		/>
	</svg>
	Unmake an Admin
</label>

<input type="checkbox" id="unmake-user-admin-modal" class="modal-toggle" bind:checked={modal} />
<div class="fixed z-50 modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<h3 class="text-lg font-bold">Unmake {user.displayName} an Admin?</h3>
		<p class="py-4">Are you really sure about this?</p>
		<div class="modal-action">
			<label for="unmake-user-admin-modal" class="btn btn-primary">I change my mind</label>
			<form action="?/unmakeAnAdmin" method="post" use:enhance={submitHandler}>
				<input type="hidden" name="uid" value={user.uid} />
				<button type="submit" class="btn btn-error" disabled={loading}>
					{#if loading}
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
						</svg>
					{/if}
					Yes, I'm sure</button
				>
			</form>
		</div>
	</div>
</div>
