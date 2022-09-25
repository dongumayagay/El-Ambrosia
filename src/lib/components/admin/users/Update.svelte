<script lang="ts">
	let checked = false;
	const submit = () => {
		checked = false;
	};
</script>

<button for="update-user-modal" class="btn btn-secondary text-primary btn-sm modal-button">
	Something</button
>
<!-- <label for="update-user-modal" class="btn btn-secondary text-primary btn-sm modal-button">
	UPDATE</label
> -->

<input type="checkbox" bind:checked id="update-user-modal" class="modal-toggle" />
<label for="update-user-modal" class="modal cursor-pointer">
	<label class="modal-box relative" for="">
		<label
			for="update-user-modal"
			class="btn btn-sm btn-error btn-outline btn-circle absolute right-2 top-2">✕</label
		>
		<form on:submit|preventDefault={submit}>
			<div class="form-control w-full">
				<h1 class="label">
					<span class="label-text">What is the name of the Item?</span>
				</h1>
				<input type="text" required placeholder="Item name" class="input input-bordered w-full" />
			</div>
			<div class="form-control w-full">
				<h1 class="label">
					<span class="label-text">What unit of measurement?</span>
				</h1>
				<input
					type="text"
					required
					placeholder="Unit of measurement (grams/pieces/etc)"
					class="input input-bordered w-full"
				/>
			</div>
			<div class="form-control w-full">
				<h1 class="label">
					<span class="label-text">What is current value?</span>
				</h1>
				<input
					type="number"
					required
					placeholder="Current value (1 or above)"
					class="input input-bordered w-full"
				/>
			</div>
			<div class="modal-action">
				<button type="submit" for="update-user-modal" class="btn btn-block"> Update User</button>
			</div>
		</form>
	</label>
</label>
