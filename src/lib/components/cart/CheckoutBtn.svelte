<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { cartStore, userStore } from '$lib/stores';
	import type { Address, ContactInfo } from '$lib/types';
	import { doc, getDoc } from 'firebase/firestore';
	import toast from 'svelte-french-toast';

	let loading = false;

	const { cartItems, cartTotal, toggleShowSideCart } = cartStore;
	const SHIPPING_FEE = 50;

	const checkout = async () => {
		if (!$userStore) return;
		try {
			loading = true;
			// check if contact info and address is setup
			const snapshots = await Promise.all([
				getDoc(doc(db, 'userContactInfo', $userStore.uid)),
				getDoc(doc(db, 'userConfig', $userStore.uid))
			]);
			const userContactInfo = snapshots[0].data() as ContactInfo;
			const userSelectedAddress = snapshots[1].get('selected_address') as Address;
			if (!userContactInfo && !userSelectedAddress)
				throw 'please setup your contact information and address first';
			if (!userContactInfo) throw 'please setup your contact information first';
			if (!userSelectedAddress) throw 'please setup your select preferred address first';

			// console.log(userContactInfo);
			// console.log(userSelectedAddress);

			const result = await fetch('/api/xendit', {
				method: 'POST',
				body: JSON.stringify({
					externalID: `${$userStore.uid}@${Date.now()}`,
					payerEmail: $userStore.email,
					customer: {
						given_names: userContactInfo.firstName,
						surname: userContactInfo.lastName,
						email: $userStore.email,
						mobile_number: userContactInfo.phoneNumber,
						address: [userSelectedAddress]
					},
					items: $cartItems.map((item) => ({
						name: item.name,
						quantity: item.quantity,
						price: item.price
					})),
					fees: [
						{
							type: 'shipping',
							value: SHIPPING_FEE
						}
					],
					amount: $cartTotal + SHIPPING_FEE,
					customerNotificationPreference: {
						invoice_created: ['sms', 'email'],
						invoice_reminder: [],
						invoice_paid: ['sms', 'email'],
						invoice_expired: []
					},
					description: 'El Ambrosia Order',
					locale: 'en',
					currency: 'PHP'
				})
			});
			const invoice_response = await result.json();
			// const userSelectedAddress = getDoc();

			// if (!userContactInfo.exists()) throw 'Please setup your contact information';

			open(invoice_response.invoice_url);
		} catch (error) {
			console.log(error);
			toast.error(error as string);
		}
		loading = false;
	};
</script>

{#if $cartItems.length !== 0}
	<footer class="flex flex-col justify-end">
		{#if !$userStore}
			<a on:click={() => toggleShowSideCart()} class="btn btn-outline" href="/auth/login">
				LOGIN TO CHECKOUT
			</a>
		{:else}
			<div class="flex flex-col py-2">
				<section class="flex justify-between">
					<h1>Subtotal:</h1>
					<h1>₱{$cartTotal}</h1>
				</section>
				<section class="flex justify-between">
					<h1>Delivery:</h1>
					<h1>₱{SHIPPING_FEE}</h1>
				</section>
				<section class="flex justify-between text-lg font-medium">
					<h1>Total:</h1>
					<h1>₱{$cartTotal + SHIPPING_FEE}</h1>
				</section>
			</div>
			<button on:click={checkout} disabled={loading} class="btn btn-outline gap-2">
				{#if loading}
					<svg
						class="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							class="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="currentColor"
							stroke-width="4"
						/>
						<path
							class="opacity-75"
							fill="currentColor"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						/>
					</svg>
				{/if}
				Proceed to Checkout
			</button>
		{/if}
	</footer>
{/if}
