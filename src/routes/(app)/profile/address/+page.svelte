<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import type { Address } from '$lib/types';
	import { collection, onSnapshot, query, where } from 'firebase/firestore';
	import { onDestroy } from 'svelte';
	import DeleteAddress from './DeleteAddress.svelte';

	let addresses: Address[] = [];

	const getAddress = async () => {
		if (!$userStore) return;
		const userAddresses = query(collection(db, 'addresses'), where('owner', '==', $userStore.uid));
		const unsubscribe = onSnapshot(userAddresses, (snapshot) => {
			addresses = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data()
			})) as Address[];
		});
		onDestroy(() => unsubscribe());
	};

	$: $userStore && getAddress();
</script>

<main class="p-4 gap-4 flex flex-col flex-1">
	<a class="btn btn-info" href="address/new">Add Address</a>
	<ul class="flex flex-col flex-1 gap-4">
		{#each addresses as address}
			<li>
				<div class="border rounded-lg p-4">
					<ul>
						<li>{address.street_line1}</li>
						<li>{address.street_line2}</li>
						<li>{address.city}</li>
						<li>{address.state}</li>
						<li>{address.postal_code}</li>
						<li>{address.country}</li>
					</ul>
					<div class="flex items-center gap-4">
						<a class="btn btn-info" href={`/profile/address/edit/${address.id}`}>Edit</a>
						<DeleteAddress id={address?.id ?? ''} />
					</div>
				</div>
			</li>
		{/each}
	</ul>
</main>
