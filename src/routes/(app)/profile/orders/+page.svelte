<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import { onSnapshot, query, where, collection } from 'firebase/firestore';
	import { onDestroy } from 'svelte';
	import { DATE_FORMATTER, PHP_FORMATTER } from '$lib/utils';
	import ConfirmOrderDelivered from './ConfirmOrderDelivered.svelte';

	let listOfOrders: any = [];
	const orderHistoryQuery = query(collection(db, 'orders'), where('owner', '==', $userStore?.uid));
	const unsubscribe = onSnapshot(orderHistoryQuery, (querySnapshot) => {
		listOfOrders = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
	});
	onDestroy(() => unsubscribe());
</script>

<main class="overflow-auto">
	{#each listOfOrders as order}
		<div>
			<h1>Order ID: {order.id}</h1>
			<h1>Order Date: {DATE_FORMATTER.format(new Date(order.created))}</h1>
			<h1>Order Status: {order.order_status}</h1>
			<h1>Total: {PHP_FORMATTER.format(order.amount)}</h1>

			<ul class="">
				{#each order.items as item}
					<li>
						●
						{item.name} x {item.quantity}
					</li>
				{/each}
			</ul>
			{#if order.order_status === 'Shipped out'}
				<ConfirmOrderDelivered id={order.id} />
			{/if}
		</div>
		<!-- <pre>
			{JSON.stringify(order, null, 2)}
		</pre> -->
	{:else}
		<h1>No order yet</h1>
	{/each}
</main>
