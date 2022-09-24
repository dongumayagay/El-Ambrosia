<br />
<form on:submit|preventDefault class="form-control mx-auto">
	<div class="input-group">
		<input type="text" placeholder="Search…" class="input input-bordered" />
		<button class="btn btn-square">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
				/></svg
			>
		</button>
	</div>
</form>
<br />
<main class="overflow-auto">
	<table class="table table-zebra w-full">
		<thead class=" sticky top-0 z-20">
			<tr>
				<th>#</th>
				<th>Name</th>
				<th>Description</th>
				<th>Value</th>
				<th>Unit</th>
				<th>Action</th>
			</tr>
		</thead>
		<tbody>
			{#each { length: 20 } as _, i}
				<tr>
					<th>{i + 1}</th>
					<td>Wrapper</td>
					<td>Lorem ipsum dolor sit amet.</td>
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
<br />
<div class="btn-group grid grid-cols-2 p-4 pt-0 mt-auto">
	<button class="btn">Previous page</button>
	<button class="btn">Next</button>
</div>
