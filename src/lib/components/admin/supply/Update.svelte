<script lang="ts">
	let checked = false;
	const submit = () => {
		checked = false;
	};
</script>

<label for="update-supply-modal" class="btn btn-secondary text-primary btn-sm modal-button">
	UPDATE</label
>

<input type="checkbox" bind:checked id="update-supply-modal" class="modal-toggle" />
<label for="update-supply-modal" class="cursor-pointer modal">
	<label class="relative modal-box" for="">
		<label
			for="update-supply-modal"
			class="absolute btn btn-sm btn-error btn-outline btn-circle right-2 top-2">✕</label
		>
		<form on:submit|preventDefault={submit}>
			<div class="w-full form-control">
				<h1 class="label">
					<span class="label-text">What is the name of the Item?</span>
				</h1>
				<input type="text" required placeholder="Item name" class="w-full input input-bordered" />
			</div>
			<div class="w-full form-control">
				<h1 class="label">
					<span class="label-text">What unit of measurement?</span>
				</h1>
				<input
					type="text"
					required
					placeholder="Unit of measurement (grams/pieces/etc)"
					class="w-full input input-bordered"
				/>
			</div>
			<div class="w-full form-control">
				<h1 class="label">
					<span class="label-text">What is current value?</span>
				</h1>
				<input
					type="number"
					required
					placeholder="Current value (1 or above)"
					class="w-full input input-bordered"
				/>
			</div>
			<div class="modal-action">
				<button type="submit" for="update-supply-modal" class="btn btn-block">
					Update Supply</button
				>
			</div>
		</form>
	</label>
</label>
