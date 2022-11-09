<script lang="ts">
	import type { CarouselItemInterface } from '$lib/types';

	export let item: CarouselItemInterface;
	export let index: number;
	export let itemName: string;
</script>

<div id={itemName + index} class="relative w-full carousel-item">
	<img src={item.image} alt={item.name} class="object-cover w-full" />
</div>
