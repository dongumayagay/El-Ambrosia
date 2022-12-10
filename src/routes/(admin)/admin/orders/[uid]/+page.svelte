<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { uid } = data;

	let userOrders: any = [];

	async function getUserOrderHistory() {
		const response = await fetch('/api/orders/' + uid);
		console.log('test');
		userOrders = await response.json();
	}

	getUserOrderHistory();
</script>

{#each userOrders as order}
	<pre>
	{JSON.stringify(order, null, 2)}
</pre>
{:else}
	no orders yet
{/each}
