<script lang="ts">
	import { FRIES } from '$lib/constants';
	import type { Variant } from '$lib/types';
	export let fries: Variant | undefined | null;
</script>

<h1 class="text-xl font-bold">Extra Garlic sauce?</h1>
<div class="  grid grid-cols-1 gap-2 ">
	<label class="btn btn-outline justify-between" class:btn-active={fries === null}>
		<h1>Nah</h1>
		<h1>₱ 0</h1>
		<input type="radio" class="hidden" bind:group={fries} value={null} required />
	</label>
	{#each FRIES as item}
		<label class="btn btn-outline justify-between" class:btn-active={fries?.name === item.name}>
			<h1>{item.name}</h1>
			<h1>₱ {item.price}</h1>
			<input type="radio" class="hidden" bind:group={fries} value={item} required />
		</label>
	{/each}
</div>
