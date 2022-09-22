<script lang="ts">
	import CarouselItem from '$lib/components/carousel/CarouselItem.svelte';

	import type { CarouselItemInterface } from '$lib/types';

	export let carouselItems: CarouselItemInterface[];
	const itemName = 'carouselItem';
	const itemLength = carouselItems.length;
</script>

<div class="carousel w-full">
	{#each carouselItems as item, index}
		<CarouselItem {item} {itemName} {index} {itemLength} />
	{/each}
</div>
<div class=" z-10 absolute flex justify-center w-full py-2 gap-2">
	{#each [...Array(carouselItems.length).keys()] as index}
		<a href={`#${itemName + index}`} class="btn btn-xs">{index}</a>
	{/each}
</div>
