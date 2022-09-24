<script>
	import HomeLogoButton from './HomeLogoButton.svelte';
	import CartButton from './CartButton.svelte';
	import AccountButton from './AccountButton.svelte';
	import NotificationButton from './NotificationButton.svelte';
</script>

<nav class="fixed z-10 w-full bg-base-100 top-0">
	<div class="navbar mx-auto max-w-7xl ">
		<HomeLogoButton />
		<div class="flex-none">
			<CartButton />
			<NotificationButton />
			<AccountButton />
		</div>
	</div>
</nav>
