<script lang="ts">
	import { EXTRA_MEAT } from '$lib/constants';
	import type { Variant } from '$lib/types';

	export let meat: Variant;
	export let extra_meat: boolean;
</script>

<h1 class="text-xl font-bold">Extra {meat?.name ?? 'Meat'}?</h1>
<div class="grid grid-cols-2 gap-2 ">
	<label class="justify-between btn btn-outline" class:btn-active={extra_meat === false}>
		<h1>Nah</h1>
		<h1>₱ 0</h1>
		<input class="hidden" type="radio" bind:group={extra_meat} value={false} required />
	</label>
	<label class="justify-between btn btn-outline" class:btn-active={extra_meat === true}>
		<h1>Yes!</h1>
		<h1>
			₱ {EXTRA_MEAT[meat?.name] ?? '0'}
		</h1>
		<input class="hidden" type="radio" bind:group={extra_meat} value={true} required />
	</label>
</div>
