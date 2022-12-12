<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { DATE_FORMATTER, PHP_FORMATTER } from '$lib/utils';
	import { collection, onSnapshot, query } from 'firebase/firestore';
	import { onDestroy } from 'svelte';
	import ChangeOrderStatus from './ChangeOrderStatus.svelte';
	let orders: any[];
	async function getOrders() {
		const ordersQuery = query(collection(db, 'invoices'));
		const unsubscribe = onSnapshot(ordersQuery, (querySnapshot) => {
			orders = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		});
		onDestroy(() => unsubscribe());
	}
	$: getOrders();
</script>

{#if orders === undefined}
	<h1>Loading</h1>
{:else}
	{#each orders as order}
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
			<ChangeOrderStatus id={order.id} />
		</div>
	{:else}
		<h1 class="text-xl font-medium">No Orders yet ☹</h1>
	{/each}
{/if}
