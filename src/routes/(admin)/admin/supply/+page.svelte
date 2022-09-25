<script lang="ts">
	import SearchBar from '$lib/components/admin/SearchBar.svelte';
	import Table from '$lib/components/admin/supply/Table.svelte';
	import PaginationButton from '$lib/components/admin/PaginationButton.svelte';
	import AddModal from '$lib/components/admin/AddModal.svelte';
	import SortBar from '$lib/components/admin/Sortbar.svelte';
	const options = ['name', 'value', 'unit', 'last updated'];
</script>

<main class="h-full flex flex-col">
	<div class="w-full max-w-7xl mx-auto p-2 gap-2 flex flex-col sm:flex-row-reverse justify-start">
		<SearchBar searchItem={'supply'} />
		<div class="flex gap-2 sm:flex-row-reverse">
			<SortBar {options} />
			<AddModal item={'supply'} />
		</div>
	</div>
	<Table />
	<PaginationButton />
</main>
