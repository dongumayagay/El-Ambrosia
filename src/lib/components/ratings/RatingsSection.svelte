<script lang="ts">
	import RatingCard from '$lib/components/ratings/RatingCard.svelte';
</script>

<section class="bg-base-200">
	<div id="feedbacks" class="grid gap-6 px-4 py-12 mx-auto max-w-7xl">
		<h1 class="text-xl text-center uppercase tracking-widest font-anton">feedbacks</h1>
		<section class="grid gap-8 lg:grid-cols-2">
			{#each { length: 4 } as _}
				<RatingCard />
			{/each}
		</section>
	</div>
</section>
