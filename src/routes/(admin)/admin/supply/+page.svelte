<script lang="ts">
	import SearchBar from '$lib/components/admin/SearchBar.svelte';
	import Table from '$lib/components/admin/supply/Table.svelte';
	import PaginationButton from '$lib/components/admin/PaginationButton.svelte';
	import AddModal from '$lib/components/admin/AddModal.svelte';
	import SortBar from '$lib/components/admin/Sortbar.svelte';
	const options = ['name', 'value', 'unit', 'last updated'];
</script>

<main class="flex flex-col h-full">
	<div class="flex flex-col justify-start w-full gap-2 p-2 mx-auto max-w-7xl sm:flex-row-reverse">
		<SearchBar searchItem={'supply'} />
		<div class="flex gap-2 sm:flex-row-reverse">
			<SortBar {options} />
			<AddModal item={'supply'} />
		</div>
	</div>
	<Table />
	<PaginationButton />
</main>
