<script lang="ts">
	import type { CarouselItemInterface } from '$lib/types';

	export let item: CarouselItemInterface;
	export let index: number;
	export let itemName: string;
</script>

<div id={itemName + index} class="carousel-item w-full relative">
	<img src={item.image} alt={item.name} class="w-full object-cover" />
</div>
