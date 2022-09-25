<script lang="ts">
	import SearchBar from '$lib/components/admin/supply/SearchBar.svelte';
	import Table from '$lib/components/admin/supply/Table.svelte';
	import PaginationButton from '$lib/components/admin/supply/PaginationButton.svelte';
	import AddSupply from '$lib/components/admin/supply/AddSupply.svelte';
	import SortBar from '$lib/components/admin/supply/Sortbar.svelte';
</script>

<div class="w-full max-w-7xl mx-auto p-2 gap-2 flex flex-col sm:flex-row justify-end">
	<div class="flex gap-2 sm:flex-row-reverse">
		<SortBar />
		<AddSupply />
	</div>
	<SearchBar />
</div>
<Table />
<PaginationButton />
