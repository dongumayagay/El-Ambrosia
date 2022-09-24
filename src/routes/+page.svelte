<script lang="ts">
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import AboutSection from '$lib/components/home/AboutSection.svelte';
	import FooterSection from '$lib/components/home/FooterSection.svelte';
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import RatingsSection from '$lib/components/ratings/RatingsSection.svelte';
	import type { CarouselItemInterface } from '$lib/types';

	const carouselItems: CarouselItemInterface[] = [
		{
			name: '0',
			image: 'https://via.placeholder.com/1000.webp/?text=El%20Ambrosia%200',
			link: '/'
		},
		{
			name: '1',
			image: 'https://via.placeholder.com/1000.webp/?text=El%20Ambrosia%201',
			link: '/'
		},
		{
			name: '2',
			image: 'https://via.placeholder.com/1000.webp/?text=El%20Ambrosia%202',
			link: '/'
		}
	];
</script>

<svelte:head><title>Home | El Ambrosia</title></svelte:head>

<Navbar />
<div id="Products" class="h-[75%]">
	<Carousel {carouselItems} />
</div>
<AboutSection />
<div class="bg-base-200">
	<RatingsSection />
</div>
<footer class="bg-base-100">
	<FooterSection />
</footer>
