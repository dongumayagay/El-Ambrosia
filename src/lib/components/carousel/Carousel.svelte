<script lang="ts">
	import { goto } from '$app/navigation';
	import CarouselItem from '$lib/components/carousel/CarouselItem.svelte';
	import type { CarouselItemInterface } from '$lib/types';

	export let carouselItems: CarouselItemInterface[];
	const itemName = 'carouselItem';
	const itemLength = carouselItems.length;
	let currentIndex = 0;

	const prev = () => {
		currentIndex = currentIndex !== 0 ? currentIndex - 1 : currentIndex;
		goto(`/#${itemName + currentIndex}`);
	};
	const next = () => {
		currentIndex = currentIndex !== itemLength - 1 ? currentIndex + 1 : currentIndex;
		goto(`/#${itemName + currentIndex}`);
	};
</script>

<div class="relative h-full">
	<div class="absolute w-full h-full carousel">
		{#each carouselItems as item, index}
			<CarouselItem {item} {itemName} {index} />
		{/each}
	</div>
	<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
		<button on:click={prev} class="shadow btn btn-circle"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
			</svg>
		</button>
		<button on:click={next} class=" btn btn-circle"
			><svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
			</svg>
		</button>
	</div>

</div>


