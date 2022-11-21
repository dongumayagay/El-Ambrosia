<script lang="ts">
	import { db } from '$lib/firebase/client';
	import type { Supply } from '$lib/types';
	import { doc, updateDoc } from 'firebase/firestore';
	import toast from 'svelte-french-toast';

	export let supply: Supply;

	const BUTTON_TEXT = 'update supply';
	const MODAL_ID = `${BUTTON_TEXT}-modal-${supply.id}`.replaceAll(' ', '-');
	let checked: boolean;
	let loading = false;

	const submit = async (event: SubmitEvent) => {
		try {
			loading = true;
			const form = event.target as HTMLFormElement;
			const formData = new FormData(form);
			const updatedSupply: Supply = {
				name: formData.get('name')?.toString() ?? '',
				unit: formData.get('unit')?.toString() ?? '',
				amount: Number(formData.get('amount')?.toString())
			};

			const docRef = doc(db, 'supplies', supply.id ?? '');
			await updateDoc(docRef, updatedSupply);

			loading = false;
			checked = false;
			toast.success(supply.name + ' updated successfully');
			form.reset();
		} catch (error) {
			toast.error(error as string);
		}
	};
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
				<span class="label-text">What is the name of the Item?</span>
			</h1>
			<input
				type="text"
				required
				placeholder="Item name"
				class="w-full input input-bordered"
				name="name"
				value={supply.name}
			/>
			<h1 class="label">
				<span class="label-text">What unit of measurement?</span>
			</h1>
			<input
				type="text"
				required
				placeholder="Unit of measurement (grams/pieces/etc)"
				class="w-full input input-bordered"
				name="unit"
				value={supply.unit}
			/>
			<h1 class="label">
				<span class="label-text">What is current value?</span>
			</h1>
			<input
				type="number"
				required
				placeholder="Current value (1 or above)"
				class="w-full input input-bordered"
				name="amount"
				value={supply.amount}
			/>
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
