<script lang="ts">
	import RatingCard from '$lib/components/ratings/RatingCard.svelte';
</script>

<div id="Feedback" class="grid gap-6 px-4 py-12 mx-auto max-w-7xl">
	<h1 class="text-xl text-center uppercase tracking-widest font-anton">Feedback</h1>
	<section class="grid gap-8 lg:grid-cols-2">
		{#each { length: 3 } as _}
			<RatingCard />
		{/each}
	</section>
</div>
