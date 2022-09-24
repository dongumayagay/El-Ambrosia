<!-- The button to open modal -->
<label for="add-supply-modal" class="btn btn-wide modal-button">
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
	Add supply</label
>

<input type="checkbox" id="add-supply-modal" class="modal-toggle" />
<div class="modal">
	<form on:submit|preventDefault class="modal-box">
		<label for="add-supply-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
		<div class="form-control w-full">
			<h1 class="label">
				<span class="label-text">What is the name of the Item?</span>
			</h1>
			<input type="text" placeholder="Item name" class="input input-bordered w-full" />
		</div>
		<div class="form-control w-full">
			<h1 class="label">
				<span class="label-text">What unit of measurement?</span>
			</h1>
			<input
				type="text"
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
				placeholder="Current value (1 or above)"
				class="input input-bordered w-full"
			/>
		</div>
		<div class="modal-action">
			<label for="add-supply-modal" class="btn btn-block">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-6 h-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
				</svg>Add Supply</label
			>
		</div>
	</form>
</div>
