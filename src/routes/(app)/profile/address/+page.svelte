<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import type { Address } from '$lib/types';
	import { collection, doc, getDoc, onSnapshot, query, setDoc, where } from 'firebase/firestore';
	import { onDestroy } from 'svelte';
	import toast from 'svelte-french-toast';
	import DeleteAddress from './DeleteAddress.svelte';

	let selected_address_id: string;
	let addresses: Address[] = [];

	const getAddresses = async () => {
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

	const getSelectedAddress = async () => {
		if (!$userStore) return;
		try {
			const docRef = doc(db, 'userConfig', $userStore.uid);
			const snapshot = await getDoc(docRef);
			const selected_address = snapshot.get('selected_address') as Address;
			if (!selected_address) throw 'Please select preferred address';
			selected_address_id = selected_address.id ?? '';
		} catch (error) {
			console.log(error);
			toast.error(error as string);
		}
	};

	const setSelectAddress = async (new_address: Address | undefined) => {
		if (new_address === undefined || !$userStore) return;
		try {
			selected_address_id = new_address.id ?? '';
			await setDoc(
				doc(db, 'userConfig', $userStore.uid),
				{ selected_address: new_address },
				{ merge: true }
			);
			toast.success('selected address');
		} catch (error) {
			console.log(error);
			toast.error(error as string);
		}
	};

	$: if ($userStore) {
		getAddresses();
		getSelectedAddress();
	}
</script>

<main class="p-4 gap-4 flex flex-col flex-1">
	<a class="btn btn-info gap-2" href="/profile/address/new"
		><svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
		</svg>
		Add Address</a
	>
	<ul class="flex flex-col flex-1 gap-4">
		{#each addresses as address}
			<main
				class="border rounded-lg p-3 flex flex-col gap-2 relative overflow-hidden"
				class:border-neutral-content={address.id === selected_address_id}
			>
				<button on:click={() => setSelectAddress(address)} class="flex flex-col items-start">
					<li>{address.street_line1}</li>
					<li>{address.street_line2}</li>
					<li>{address.city}</li>
					<li>{address.state}</li>
					<li>{address.postal_code}</li>
					<li>{address.country}</li>
				</button>
				<div class="grid grid-cols-2 gap-3">
					<a class="btn btn-secondary gap-2" href={`/profile/address/edit/${address.id}`}
						><svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
							/>
						</svg>
						<span> Edit </span>
					</a>
					<DeleteAddress
						is_selected_address={address.id === selected_address_id}
						id={address?.id ?? ''}
					/>
				</div>
				{#if address.id === selected_address_id}
					<span
						class=" absolute right-0 top-0 bg-neutral-content flex gap-1 p-1 rounded-bl-xl items-center text-primary text-xs font-medium"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
								clip-rule="evenodd"
							/>
						</svg>
						SELECTED
					</span>
				{/if}
			</main>
		{/each}
	</ul>
</main>
