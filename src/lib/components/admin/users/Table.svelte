<script lang="ts">
	import { relativeTimeFormatter } from '$lib/utils';
</script>

<main class="overflow-auto">
	<table class="table table-compact table-zebra w-full">
		<thead class="sticky top-0 z-20">
			<tr>
				<th>Name</th>
				<th>Email</th>
				<th>Contact number</th>
				<th>Address</th>
				<th>Registered</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody class="text-primary-focus">
			{#each { length: 20 } as _, i}
				<tr>
					<th>Juan Dela Cruz</th>
					<td>juan@dela.cruz</td>
					<td>09876543210</td>
					<td class="hide-scrollbar max-w-[192px] overflow-x-scroll">
						blk 69 lot 420, kahit san street, bgry nawawala, san pedro , laguna
					</td>
					<td>
						{relativeTimeFormatter(-1, 'day')}
					</td>
					<td>
						<button
							for="update-user-modal"
							class="btn btn-secondary text-primary btn-sm modal-button"
						>
							TO DO</button
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style>
