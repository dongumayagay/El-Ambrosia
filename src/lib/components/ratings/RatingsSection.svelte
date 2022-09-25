<script lang="ts">
	import RatingCard from '$lib/components/ratings/RatingCard.svelte';
</script>

<div id="Ratings" class=" mx-auto max-w-7xl py-12 px-4 gap-6 grid">
	<h1 class="text-center text-xl uppercase">Ratings</h1>
	<section class="grid gap-8 lg:grid-cols-2">
		{#each { length: 3 } as _}
			<RatingCard />
		{/each}
	</section>
</div>
