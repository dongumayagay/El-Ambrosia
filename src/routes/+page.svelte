<script lang="ts">
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import type { CarouselItemInterface } from '$lib/types';

	const carouselItems: CarouselItemInterface[] = [
		{
			name: '0',
			image: 'https://via.placeholder.com/500.webp/?text=El%20Ambrosia%200',
			link: '/'
		},
		{
			name: '1',
			image: 'https://via.placeholder.com/500.webp/?text=El%20Ambrosia%201',
			link: '/'
		},
		{
			name: '2',
			image: 'https://via.placeholder.com/500.webp/?text=El%20Ambrosia%202',
			link: '/'
		},
		{
			name: '3',
			image: 'https://via.placeholder.com/500.webp/?text=El%20Ambrosia%203',
			link: '/'
		},
		{
			name: '4',
			image: 'https://via.placeholder.com/500.webp/?text=El%20Ambrosia%204',
			link: '/'
		}
	];
</script>

<Carousel {carouselItems} />
