<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { doc, updateDoc } from 'firebase/firestore';

	export let id: string;
	const MODAL_ID = `order-status-update-${id}`;
	const BUTTON_TEXT = 'Update Order Status';
	let checked: boolean;
	let loading = false;

	async function submit(event: SubmitEvent) {
		loading = true;
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const order_status = formData.get('order_status')?.toString();
		console.log(order_status);
		if (!order_status) return;
		try {
			await updateDoc(doc(db, 'invoices', id), {
				order_status
			});
		} catch (error) {
			console.log(error);
			alert(error);
		}
		loading = false;
		checked = false;
	}
</script>

<label for={MODAL_ID} class="gap-2 btn btn-info modal-button ">
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
			d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
		/>
	</svg>
	<span class="hidden sm:inline"> {BUTTON_TEXT}</span>
</label>

<input type="checkbox" bind:checked id={MODAL_ID} class="modal-toggle" />

<label for={MODAL_ID} class="cursor-pointer modal modal-bottom sm:modal-middle">
	<label class="relative modal-box" for="">
		<label for={MODAL_ID} class="absolute btn btn-sm btn-error btn-outline btn-circle right-2 top-2"
			>✕</label
		>
		<form on:submit|preventDefault={submit} class="w-full form-control">
			<h1 class="label">
				<span class="label-text">Update order status</span>
			</h1>

			<select required name="order_status">
				<option value="" selected disabled>Select status</option>
				<!-- <option>Order Received</option> -->
				<option>Preparing</option>
				<option>Shipped out</option>
				<!-- <option>Order Delivered</option> -->
			</select>

			<div class="modal-action">
				<button type="submit" for={MODAL_ID} class="btn btn-block" disabled={loading}>
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
					{BUTTON_TEXT}
				</button>
			</div>
		</form>
	</label>
</label>
