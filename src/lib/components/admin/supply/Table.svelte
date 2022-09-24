<main class="overflow-auto">
	<table class="table table-zebra w-full">
		<thead class=" sticky top-0 z-20">
			<tr>
				<th>Name</th>
				<!-- <th>Description</th> -->
				<th>Value</th>
				<th>Unit</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#each { length: 20 } as _, i}
				<tr>
					<th>Wrapper</th>
					<!-- <td class="hide-scrollbar max-w-[192px] overflow-x-scroll"
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe maxime cum ipsam
						incidunt sequi voluptas minus nam distinctio odio a?</td
					> -->
					<td>1</td>
					<td>pc/s</td>
					<td>
						<button class="btn btn-primary btn-xs">update</button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<!-- <style>
	.hide-scrollbar::-webkit-scrollbar {
		display: none;
	}

	/* Hide scrollbar for IE, Edge and Firefox */
	.hide-scrollbar {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}
</style> -->
