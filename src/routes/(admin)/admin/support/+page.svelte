<script lang="ts">
	import SearchBar from '$lib/components/admin/SearchBar.svelte';
	import PaginationButton from '$lib/components/admin/PaginationButton.svelte';
	import ChatPreviewCard from '$lib/components/admin/support/ChatPreviewCard.svelte';
</script>

<main class="flex flex-col h-full">
	<div class="flex flex-col justify-start w-full gap-2 p-2 mx-auto max-w-7xl sm:flex-row-reverse">
		<SearchBar searchItem={'support'} />
	</div>
	<main class="overflow-auto">
		{#each { length: 20 } as _}
			<ChatPreviewCard />
		{/each}
	</main>

	<PaginationButton />
</main>
