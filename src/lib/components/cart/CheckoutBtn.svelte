<script>
	import { cartStore, userStore } from '$lib/stores';

	const { cartItems, cartTotal, toggleShowSideCart } = cartStore;

	let path = '/auth/login';
</script>

{#if $cartItems.length !== 0}
	<footer class="flex flex-col justify-end">
		<a href={path} on:click={() => toggleShowSideCart(false)} class="btn btn-outline gap-2">
			{#if !$userStore}
				<span> LOGIN TO CHECKOUT </span>
			{/if}
			<span> ₱{$cartTotal} </span>
		</a>
	</footer>
{/if}
