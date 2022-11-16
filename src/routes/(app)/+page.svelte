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

<section id="Products" class=" h-5/6">
	<Carousel {carouselItems} />
</section>
<section class="">
	<!--  -->

	<div id="Menu" class="grid gap-6 px-4 py-12 mx-auto max-w-7xl">
		<h1 class="text-xl text-center uppercase tracking-widest font-anton">Menu</h1>
		<section class="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-6">
			<div class="card max-w-sm bg-base-200 shadow-xl">
				<figure class="bg-pink-500 ">
					<img class=" object-cover w-full h-full" src="/images/underdog.jpg" alt="Album" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-anton tracking-widest">Underdog</h2>
					<p class=" text-primary-focus">
						6" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic
						Sauce.
					</p>
					<div class="card-actions justify-end">
						<button class="btn btn-secondary">Buy now</button>
					</div>
				</div>
			</div>
			<div class="card max-w-sm bg-base-200 shadow-xl">
				<figure class="bg-pink-500 ">
					<img class=" object-cover w-full h-full" src="/images/underdog.jpg" alt="Album" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-anton tracking-widest">Underdog</h2>
					<p class=" text-primary-focus">
						6" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic
						Sauce.
					</p>
					<div class="card-actions justify-end">
						<button class="btn btn-secondary">Buy now</button>
					</div>
				</div>
			</div>
			<div class="card max-w-sm bg-base-200 shadow-xl">
				<figure class="bg-pink-500 ">
					<img class=" object-cover w-full h-full" src="/images/underdog.jpg" alt="Album" />
				</figure>
				<div class="card-body">
					<h2 class="card-title font-anton tracking-widest">Underdog</h2>
					<p class=" text-primary-focus">
						6" inch Kuboos bread, wrap with Classic fries, pickles & El Ambrosia Signature Garlic
						Sauce.
					</p>
					<div class="card-actions justify-end">
						<button class="btn btn-secondary">Buy now</button>
					</div>
				</div>
			</div>
		</section>
	</div>
</section>
<section id="About" class="py-12 bg-base-100">
	<AboutSection />
</section>
<section class="bg-base-200">
	<RatingsSection />
</section>
<footer class="bg-base-100">
	<FooterSection />
</footer>
