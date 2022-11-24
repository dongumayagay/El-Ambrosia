<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type { CarouselItemInterface } from '$lib/types';

	const carouselItems: CarouselItemInterface[] = [
		{
			name: '0',
			image: '/images/1.jpg'
		},
		{
			name: '1',
			image: '/images/2.jpg'
		},
		{
			name: '2',
			image: '/images/3.jpg'
		}
	];
</script>

<section id="Products" class=" h-[80vh]">
	<Carousel {carouselItems} />
</section>
