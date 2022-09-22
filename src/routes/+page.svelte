<script lang="ts">
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import type { CarouselItemInterface } from '$lib/types';

	const carouselItems: CarouselItemInterface[] = [
		{
			name: '0',
			image: 'https://via.placeholder.com/300.webp/?text=El%20Ambrosia%200',
			link: '/'
		},
		{
			name: '1',
			image: 'https://via.placeholder.com/300.webp/?text=El%20Ambrosia%201',
			link: '/'
		},
		{
			name: '2',
			image: 'https://via.placeholder.com/300.webp/?text=El%20Ambrosia%202',
			link: '/'
		}
	];
</script>

<div class=" h-96">
	<Carousel {carouselItems} />
</div>
