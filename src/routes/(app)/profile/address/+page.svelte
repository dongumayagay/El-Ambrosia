<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import type { Address } from '$lib/types';
	import { collection, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
	import { onDestroy } from 'svelte';
	import toast from 'svelte-french-toast';
	import DeleteAddress from './DeleteAddress.svelte';

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

	// const deleteAddress = async (id: string) => {
	// 	if (!$userStore) return;
	// 	try {
	// 		await deleteDoc());
	// 		toast.success('address deleted');
	// 	} catch (error: any) {
	// 		console.log(error);
	// 		if (error?.code)
	// 			toast.error(error.code.split('/')[1].replaceAll('-', ' '), {
	// 				className: 'uppercase'
	// 			});
	// 		else toast.error(error as string);
	// 	}
	// };

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
						<a class="btn btn-info" href={`address/edit/${address.id}`}>Edit</a>
						<DeleteAddress id={address?.id ?? ''} />
					</div>
				</div>
			</li>
		{/each}
	</ul>
</main>
