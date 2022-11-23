<script lang="ts">
	import type { Product, Variant } from '$lib/types';

	export let product: Product | undefined;
	export let meat: Variant;
</script>

<h1 class="text-xl font-bold">Choose meat option:</h1>
<div class="grid grid-cols-2 gap-2">
	{#each product?.variants ?? [] as variant}
		<label
			value={variant.name}
			class=" btn btn-outline justify-between"
			class:btn-active={meat?.name === variant.name}
		>
			<h1>{variant.name}</h1>
			<h1>₱ {variant.price}</h1>
			<input type="radio" class="hidden" bind:group={meat} value={variant} required />
		</label>
	{:else}
		No options
	{/each}
</div>
