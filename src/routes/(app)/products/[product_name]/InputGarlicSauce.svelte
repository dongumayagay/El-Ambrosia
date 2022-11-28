<script lang="ts">
	import { GARLIC_SAUCE } from '$lib/constants';

	export let add_extra_garlic_sauce: boolean;
</script>

<h1 class="text-xl font-bold">Extra Garlic sauce?</h1>
<div class=" grid grid-cols-2 gap-2">
	<label
		class="btn btn-outline justify-between"
		class:btn-active={add_extra_garlic_sauce === false}
	>
		<h1>Nah</h1>
		<h1>₱ 0</h1>
		<input required class="hidden" type="radio" bind:group={add_extra_garlic_sauce} value={false} />
	</label>
	<label class="btn btn-outline justify-between" class:btn-active={add_extra_garlic_sauce === true}>
		<h1>Yes!</h1>
		<h1>
			₱ {GARLIC_SAUCE.price}
		</h1>
		<input required class="hidden" type="radio" bind:group={add_extra_garlic_sauce} value={true} />
	</label>
</div>
