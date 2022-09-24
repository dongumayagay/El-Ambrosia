<script lang="ts">
	import type { PageData } from './$types';
	import Carousel from '$lib/components/carousel/Carousel.svelte';
	import AboutSection from '$lib/components/home/AboutSection.svelte';
	import FooterSection from '$lib/components/home/FooterSection.svelte';
	import RatingsSection from '$lib/components/ratings/RatingsSection.svelte';
	import type { CarouselItemInterface } from '$lib/types';

	export let data: PageData;
	const carouselItems: CarouselItemInterface[] = data.products;
</script>

<svelte:head><title>Home | El Ambrosia</title></svelte:head>

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
