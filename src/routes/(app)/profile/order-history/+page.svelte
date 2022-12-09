<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import { onSnapshot, query, where, collection } from 'firebase/firestore';
	import { onDestroy } from 'svelte';

	let listOfOrders: any = [];
	const orderHistoryQuery = query(
		collection(db, 'invoices'),
		where('owner', '==', $userStore?.uid)
	);
	const unsubscribe = onSnapshot(orderHistoryQuery, (querySnapshot) => {
		listOfOrders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	});
	onDestroy(() => unsubscribe());
</script>

<main class="overflow-auto">
	{#each listOfOrders as orders}
		<pre>
			{JSON.stringify(orders, null, 2)}
		</pre>
		<div />
	{:else}
		<h1>No order yet</h1>
	{/each}
</main>
