<script lang="ts">
	import { db } from '$lib/firebase/client';
	import type { Supply } from '$lib/types';
	import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
	import { onDestroy } from 'svelte';
	import AddSupply from './AddSupply.svelte';

	let supplies: Supply[];

	const q = query(collection(db, 'supplies'), orderBy('name'));
	const unsubscribe = onSnapshot(q, (querySnapshot) => {
		supplies = querySnapshot.docs.map((doc) => {
			const data = doc.data();
			const supply: Supply = {
				id: doc.id,
				name: data.name,
				unit: data.unit,
				amount: data.amount
			};
			return supply;
		});
	});
	onDestroy(() => unsubscribe());
</script>

<header>
	<AddSupply />
</header>
<div class="w-full overflow-x-auto">
	<table class="table w-full">
		<thead>
			<tr>
				<th>Name</th>
				<th>Value</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#if supplies === undefined}
				<tr>
					<td colspan="4">
						<h1 class="flex items-center justify-center">
							<svg
								class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									class="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									stroke-width="4"
								/>
								<path
									class="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								/>
							</svg> Loading list of supplies...
						</h1>
					</td>
				</tr>
			{:else}
				{#each supplies as supply}
					<tr class="">
						<th>
							{supply.name}
						</th>
						<td>
							{supply.amount}
							{supply.unit}
						</td>

						<th>
							<button class="gap-2 btn btn-secondary">
								<svg
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

								Update
							</button>
						</th>
					</tr>
				{:else}
					No supplies
				{/each}
			{/if}
		</tbody>
	</table>
</div>
