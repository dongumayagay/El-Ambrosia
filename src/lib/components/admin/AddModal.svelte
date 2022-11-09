<script lang="ts">
	export let item: string;
	const modalId = 'add' + item + 'modal';
	let checked = false;
	const submit = () => (checked = false);
</script>

<label for={modalId} class="btn modal-button btn-square sm:btn-wide">
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		stroke-width="1.5"
		stroke="currentColor"
		class="w-6 h-6"
	>
		<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
	</svg>
	<span class="hidden sm:inline"> Add supply </span>
</label>

<input type="checkbox" bind:checked id={modalId} class="modal-toggle" />

<label for={modalId} class="cursor-pointer modal">
	<label class="relative modal-box" for="">
		<label for={modalId} class="absolute btn btn-sm btn-error btn-outline btn-circle right-2 top-2"
			>✕</label
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
				<button type="submit" for={modalId} class="btn btn-block">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
					</svg>Add Supply</button
				>
			</div>
		</form>
	</label></label
>
