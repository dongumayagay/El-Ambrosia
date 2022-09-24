<script>
	import SearchBar from '$lib/components/admin/supply/SearchBar.svelte';
	import Table from '$lib/components/admin/supply/Table.svelte';
	import PaginationButton from '$lib/components/admin/supply/PaginationButton.svelte';
	import AddSupply from '$lib/components/admin/supply/AddSupply.svelte';
</script>

<div
	class="flex flex-col w-full max-w-7xl mx-auto justify-center items-center py-2 gap-2 sm:flex-row sm:justify-between "
>
	<AddSupply />
	<SearchBar />
</div>
<Table />
<PaginationButton />
