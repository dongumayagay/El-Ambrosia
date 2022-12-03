<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import type { Address } from '$lib/types';
	import { collection, onSnapshot } from 'firebase/firestore';
	import { onDestroy } from 'svelte';

	let addresses: Address[] = [];

	const getAddress = async () => {
		if (!$userStore) return;
		const unsubscribe = onSnapshot(
			collection(db, `userProfiles/${$userStore.uid}/address`),
			(snapshot) => {
				addresses = snapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data()
				})) as Address[];
			}
		);
		onDestroy(() => unsubscribe());
	};

	$: $userStore && getAddress();
</script>

<main class="p-4 gap-4 flex flex-col flex-1">
	<a class="btn btn-info" href="address/new">Add Address</a>
	<ul class="flex flex-col flex-1 bg-pink-600 gap-4">
		{#each addresses as address}
			<li>
				<div class="flex-1 border h-full bg-base-300">
					{JSON.stringify(address)}
				</div>
			</li>
		{/each}
	</ul>
</main>
