<script lang="ts">
	import type { Variant } from '$lib/types';
	export let extra_meat: Variant | undefined;
	export let add_extra_meat: boolean;
</script>

<h1 class="text-xl font-bold">Extra {extra_meat?.name ?? 'Meat'}?</h1>
<div class="grid grid-cols-2 gap-2 ">
	<label class="justify-between btn btn-outline" class:btn-active={add_extra_meat === false}>
		<h1>Nah</h1>
		<h1>₱ 0</h1>
		<input class="hidden" type="radio" bind:group={add_extra_meat} value={false} required />
	</label>
	<label class="justify-between btn btn-outline" class:btn-active={add_extra_meat === true}>
		<h1>Yes!</h1>
		<h1>
			₱ {extra_meat?.price ?? '0'}
		</h1>
		<input class="hidden" type="radio" bind:group={add_extra_meat} value={true} required />
	</label>
</div>
