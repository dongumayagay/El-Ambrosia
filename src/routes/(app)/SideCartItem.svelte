<script lang="ts">
	import type { CartItem } from '$lib/types';

	export let cartItem: CartItem;
</script>

<div class="flex gap-2 flex-row">
	<img src={cartItem.image} class=" aspect-square object-cover w-32 cursor-default hover:" alt="" />
	<main class="flex flex-col  h-full flex-1 ">
		<section class="flex justify-between font-bold capitalize">
			<h1>{cartItem.name}</h1>
			<h1>₱{cartItem.price}</h1>
		</section>
		{#if cartItem.variant}
			<section class="flex justify-between capitalize">
				<h1>Extra {cartItem.variant.name}</h1>
				<h1>₱{cartItem.variant.price}</h1>
			</section>
		{/if}
		<section class="flex justify-between gap-2 mt-auto">
			<label class="input-group">
				<span>Qty</span>
				<input
					type="number"
					value={cartItem.quantity}
					min="1"
					class=" input input-bordered w-full max-w-fit text-center invalid:border-red-500 invalid:text-red-500"
				/>
			</label>
			<button type="button" class="btn text-error hover:bg-error/30 btn-circle btn-ghost">
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
						d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
					/>
				</svg>
			</button>
		</section>
	</main>
</div>
