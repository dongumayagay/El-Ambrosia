<script lang="ts">
	import SearchBar from '$lib/components/admin/SearchBar.svelte';
	import PaginationButton from '$lib/components/admin/PaginationButton.svelte';
	import ChatPreviewCard from '$lib/components/admin/support/ChatPreviewCard.svelte';
</script>

<main class="h-full flex flex-col">
	<div class="w-full max-w-7xl mx-auto p-2 gap-2 flex flex-col sm:flex-row-reverse justify-start">
		<SearchBar searchItem={'support'} />
	</div>
	<main class="overflow-auto">
		{#each { length: 20 } as _}
			<ChatPreviewCard />
		{/each}
	</main>

	<PaginationButton />
</main>
