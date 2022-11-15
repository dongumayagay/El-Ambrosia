<script lang="ts">
	import HomeLogoButton from './HomeLogoButton.svelte';
	import CartButton from './CartButton.svelte';
	import AccountButton from './AccountButton.svelte';
	import NotificationButton from './NotificationButton.svelte';

	let scrollY: number;
</script>

<svelte:window bind:scrollY />
<nav
	class={`${
		scrollY < 100 ? 'bg-base-100/50' : 'bg-base-100'
	} fixed top-0 z-10 w-full transition-colors duration-700 hover:bg-base-100
	`}
>
	<div class="mx-auto navbar max-w-7xl ">
		<HomeLogoButton />
		<div class="flex-none">
			<CartButton />
			<NotificationButton />
			<AccountButton />
		</div>
	</div>
</nav>