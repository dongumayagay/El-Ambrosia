<script>
	import SearchBar from '$lib/components/admin/supply/SearchBar.svelte';
	import Table from '$lib/components/admin/supply/Table.svelte';
	import PaginationButton from '$lib/components/admin/supply/PaginationButton.svelte';
	import AddSupply from '$lib/components/admin/supply/AddSupply.svelte';
	import SortButton from '$lib/components/admin/supply/SortButton.svelte';
</script>

<div
	class="flex  w-full max-w-7xl mx-auto justify-center items-center p-2 gap-2 sm:flex-row sm:justify-end "
>
	<SortButton />
	<AddSupply />
	<SearchBar />
</div>
<Table />
<PaginationButton />
