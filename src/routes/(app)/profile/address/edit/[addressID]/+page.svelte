<script lang="ts">
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase/client';
	import type { Address } from '$lib/types';
	import { doc, getDoc } from 'firebase/firestore';
	import toast from 'svelte-french-toast';
	import type { PageData } from './$types';
	import Form from './Form.svelte';

	export let data: PageData;
	const { addressID } = data;
	// let address: Address;

	const getAddress = async () => {
		try {
			const docRef = doc(db, 'addresses', addressID);
			const snapshot = await getDoc(docRef);
			if (!snapshot.exists()) throw `address doesn't exist`;
			return { id: snapshot.id, ...snapshot.data() } as Address;
		} catch (error) {
			console.log(error);
			goto('/profile/address');
			toast.error(error as string);
		}
	};
</script>

{#await getAddress()}
	<h1 class="flex items-center justify-center">
		<svg
			class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
		>
			<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
			<path
				class="opacity-75"
				fill="currentColor"
				d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			/>
		</svg> Fetching address details...
	</h1>
{:then address}
	{#if address}
		<Form {address} />
	{/if}
{:catch error}
	<h1>{error}</h1>
{/await}
