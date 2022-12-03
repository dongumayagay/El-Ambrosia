<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import { addDoc, collection } from 'firebase/firestore';
	import toast from 'svelte-french-toast';
	import type { CityOption, Address } from '$lib/types';
	import { CITY_OPTIONS } from '$lib/constants';
	import { goto } from '$app/navigation';

	let street_line1 = '';
	let street_line2 = '';
	let seletedCityOption: CityOption;
	let loading = false;

	const submitHandler = async () => {
		try {
			if (!$userStore) return;
			const address: Address = {
				street_line1: street_line1,
				street_line2: street_line2,
				city: seletedCityOption.city,
				state: seletedCityOption.state,
				postal_code: seletedCityOption.postal_code,
				country: 'Philippines'
			};
			await addDoc(collection(db, `userProfiles/${$userStore.uid}/address/`), address);
			goto('/profile/address', { replaceState: true });
			toast.success('address added');
		} catch (error: any) {
			if (error?.code)
				toast.error(error.code.split('/')[1].replaceAll('-', ' '), {
					className: 'uppercase'
				});
			else toast.error(error as string);
		}
		loading = false;
	};
</script>

<form on:submit|preventDefault={submitHandler} class="grid gap-4 p-4">
	<label class="form-control">
		<h1>Line 1</h1>
		<input
			class="input input-bordered peer"
			type="text"
			placeholder="Blk 1 Lot 1, Apt. 1 Building 1"
			required
			bind:value={street_line1}
		/>
	</label>
	<label class="form-control">
		<h1>Line 2</h1>
		<input
			class="input input-bordered peer"
			type="text"
			placeholder="Mahogany Street, Barangay Acacia"
			bind:value={street_line2}
		/>
	</label>
	<label class="form-control">
		<h1>City</h1>
		<select required class="input input-bordered" bind:value={seletedCityOption}>
			<option selected disabled value="">Please select city</option>
			{#each CITY_OPTIONS as cityOption}
				<option value={cityOption}>{cityOption.name}</option>
			{/each}
		</select>
	</label>

	<button class=" btn btn-info gap-2" disabled={loading} type="submit">
		{#if loading}
			<svg
				class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
			</svg>
		{/if}
		Add</button
	>
</form>
