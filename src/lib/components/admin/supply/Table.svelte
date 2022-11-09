<script lang="ts">
	import { relativeTimeFormatter } from '$lib/utils';
	import Update from './Update.svelte';
</script>

<main class="overflow-auto">
	<table class="table w-full table-compact table-zebra">
		<thead class="sticky top-0 z-20 ">
			<tr>
				<th>Name</th>
				<th>Value</th>
				<th>Unit</th>
				<th>Last Updated</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody class="text-primary-focus">
			{#each { length: 20 } as _, i}
				<tr>
					<th>Wrapper</th>
					<td>1</td>
					<td>pc/s</td>
					<td>
						{relativeTimeFormatter(-1, 'day')}
					</td>
					<td>
						<Update />
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>
