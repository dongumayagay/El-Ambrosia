<script>
	import AccountButton from '$lib/components/navbar/AccountButton.svelte';
	import SideCartToggle from './SideCartToggle.svelte';
</script>

<div class="navbar bg-base-100 w-full max-w-7xl mx-auto">
	<div class="navbar-start">
		<!--  -->
		<a href="/" class="text-xl tracking-widest normal-case font-anton">
			<h1 class="">El Ambrosia</h1>
		</a>
	</div>
	<div class="navbar-center">
		<!--  -->
	</div>
	<div class="navbar-end">
		<!--  -->
		<SideCartToggle />
		<AccountButton />
	</div>
</div>
