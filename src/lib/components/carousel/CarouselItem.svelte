<script lang="ts">
	import type { CarouselItemInterface } from '$lib/types';

	export let item: CarouselItemInterface;
	export let index: number;
	export let itemName: string;
	export let itemLength: number;

	const id = itemName + index;
	const src = item.image;
	const prev = index !== 0 ? itemName + (index - 1) : id;
	const next = index !== itemLength ? itemName + (index + 1) : id;
</script>

<div {id} class="carousel-item w-full relative">
	<img {src} alt={item.name} class="w-full" />
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		<a href={`#${prev}`} class="btn btn-circle">❮</a>
		<a href={`#${next}`} class="btn btn-circle">❯</a>
	</div>
</div>
