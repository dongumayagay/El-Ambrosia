<script lang="ts">
	import SearchBar from '$lib/components/admin/users/SearchBar.svelte';
	import Table from '$lib/components/admin/users/Table.svelte';
	import PaginationButton from '$lib/components/admin/users/PaginationButton.svelte';
	import Add from '$lib/components/admin/users/Add.svelte';
	import SortBar from '$lib/components/admin/users/Sortbar.svelte';
</script>

<div class="w-full max-w-7xl mx-auto p-2 gap-2 flex flex-col sm:flex-row justify-end">
	<div class="flex gap-2 sm:flex-row-reverse">
		<SortBar />
		<!-- <Add /> -->
	</div>
	<SearchBar />
</div>
<Table />
<PaginationButton />
