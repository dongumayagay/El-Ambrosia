<script lang="ts">
	import type { PageData } from './$types';

	import SearchBar from '$lib/components/admin/SearchBar.svelte';
	import Table from '$lib/components/admin/users/Table.svelte';
	import SortBar from '$lib/components/admin/Sortbar.svelte';
	import PaginationButton from '$lib/components/admin/PaginationButton.svelte';
	import RefreshButton from '$lib/components/RefreshButton.svelte';
	const options = ['name', 'email', 'contact number', 'registered	'];
	export let data: PageData;
	console.log(data);
</script>

<div class="flex flex-col justify-start w-full gap-2 p-2 mx-auto max-w-7xl sm:flex-row-reverse">
	<RefreshButton dependency={data.dependency} />
	<SearchBar searchItem={'user'} />
	<div class="flex gap-2 sm:flex-row-reverse">
		<SortBar {options} />
	</div>
</div>
<Table />
<PaginationButton />
