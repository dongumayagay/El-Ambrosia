<script lang="ts">
	import type { PageData } from './$types';
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import AboutSection from './AboutSection.svelte';
	import RatingsSection from '$lib/components/ratings/RatingsSection.svelte';
	import type { CarouselItemInterface } from '$lib/types';
	import MenuSection from '$lib/components/menu/MenuSection.svelte';
	import CarouselSection from '$lib/components/carousel/CarouselSection.svelte';

	export let data: PageData;
	const carouselItems: CarouselItemInterface[] = data.carouselItems;
</script>

<CarouselSection {carouselItems} />
<MenuSection />
<AboutSection />
<RatingsSection />
