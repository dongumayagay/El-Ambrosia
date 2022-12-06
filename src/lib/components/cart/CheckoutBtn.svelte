<script>
	import { cartStore, userStore } from '$lib/stores';

	const { cartItems, cartTotal, toggleShowSideCart } = cartStore;

	const checkout = async () => {
		open('https://www.google.com/');
	};
</script>

{#if $cartItems.length !== 0}
	<footer class="flex flex-col justify-end">
		<div class="flex flex-col py-2">
			<section class="flex justify-between">
				<h1>Subtotal:</h1>
				<h1>₱{$cartTotal}</h1>
			</section>
			<section class="flex justify-between">
				<h1>Delivery:</h1>
				<h1>₱{50}</h1>
			</section>
			<section class="flex justify-between text-lg font-medium">
				<h1>Total:</h1>
				<h1>₱{$cartTotal + 50}</h1>
			</section>
		</div>
		{#if !$userStore}
			<a on:click={() => toggleShowSideCart()} class="btn btn-outline" href="/auth/login">
				LOGIN TO CHECKOUT
			</a>
		{:else}
			<button on:click={checkout} class="btn btn-outline"> Proceed to Checkout </button>
		{/if}
	</footer>
{/if}
