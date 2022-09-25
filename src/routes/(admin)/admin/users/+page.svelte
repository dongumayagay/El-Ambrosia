<script lang="ts">
	import SearchBar from '$lib/components/admin/SearchBar.svelte';
	import Table from '$lib/components/admin/users/Table.svelte';
	import SortBar from '$lib/components/admin/Sortbar.svelte';
	import PaginationButton from '$lib/components/admin/PaginationButton.svelte';
	const options = ['name', 'email', 'contact number', 'registered	'];
</script>

<main class="h-full flex flex-col">
	<div class="w-full max-w-7xl mx-auto p-2 gap-2 flex flex-col sm:flex-row-reverse justify-start">
		<SearchBar searchItem={'user'} />
		<div class="flex gap-2 sm:flex-row-reverse">
			<SortBar {options} />
		</div>
	</div>
	<Table />
	<PaginationButton />
</main>
