<script lang="ts">
	import Carousel from './Carousel.svelte';
	import type { CarouselItemInterface } from '$lib/types';

	export let carouselItems: CarouselItemInterface[];
</script>

<section id="Products" class=" h-5/6">
	<Carousel {carouselItems} />
</section>
