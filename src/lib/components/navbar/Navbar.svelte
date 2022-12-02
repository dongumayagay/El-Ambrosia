<script>
	import AccountButton from '$lib/components/navbar/AccountButton.svelte';
	import SideCartToggle from '$lib/components/cart/SideCartToggle.svelte';
	import { page } from '$app/stores';
	$: isInProfile = $page.url.pathname.split('/').filter((value) => value !== '')[0] === 'profile';
</script>

<div class="navbar bg-base-100 w-full max-w-7xl mx-auto">
	<div class="navbar-start">
		<label
			for="profile-sidebar"
			class="btn btn-ghost btn-circle drawer-button lg:hidden"
			class:hidden={!isInProfile}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h7"
				/>
			</svg></label
		>
	</div>
	<div class="navbar-center">
		<a href="/" class="text-xl tracking-widest normal-case font-anton">
			<h1 class="">El Ambrosia</h1>
		</a>
		<!--  -->
	</div>
	<div class="navbar-end">
		<!--  -->
		<SideCartToggle />
		<AccountButton />
	</div>
</div>
