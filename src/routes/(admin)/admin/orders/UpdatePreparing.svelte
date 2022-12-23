<script lang="ts">
	export let order: any;
	import { db } from '$lib/firebase/client';
	import { doc, updateDoc } from 'firebase/firestore';

	const MODAL_ID = `order-status-update-preparing${order.id}`;
	const BUTTON_TEXT = 'Update to Preparing';
	let checked: boolean;
	let loading = false;
	async function submit(event: SubmitEvent) {
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);
		const order_status = formData.get('order_status')?.toString();
		if (!order_status) {
			checked = false;
			return;
		}
		loading = true;
		try {
			// await updateDoc(doc(db, 'orders', id), {
			// 	order_status
			// });
			console.log(order);
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
			d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
		/>
	</svg>

	<span class="hidden sm:inline"> {BUTTON_TEXT}</span>
</label>

<input type="checkbox" bind:checked id={MODAL_ID} class="modal-toggle" />

<label for={MODAL_ID} class="cursor-pointer z-auto modal modal-bottom sm:modal-middle ">
	<label class="relative modal-box" for="">
		<h3 class="text-lg font-bold">Update Order {order.id}?</h3>
		<p class="py-4 whitespace-pre-wrap">Are you sure about this?</p>
		<div class="modal-action">
			<label for={MODAL_ID} class="btn btn-primary">I change my mind</label>
			<form on:submit|preventDefault={submit}>
				<button type="submit" class="btn btn-info" disabled={loading}>
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
		</div></label
	>
</label>
