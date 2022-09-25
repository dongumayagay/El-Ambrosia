<script lang="ts">
	import { relativeTimeFormatter } from '$lib/utils';
</script>

<main class="h-full">
	<div class="w-full max-w-7xl mx-auto p-2 gap-2 flex flex-col sm:flex-row-reverse justify-start">
		<form on:submit|preventDefault class="form-control">
			<div class="input-group">
				<input
					type="text"
					placeholder="Search support…"
					class="input input-bordered w-full max-w-xs"
				/>
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
	</div>
	<div class="h-full overflow-y-auto w-full">
		<ul class="w-full bg-base-200 flex flex-col ">
			{#each { length: 20 } as _}
				<a
					href="/admin/support/1"
					class="bg-base-300 border-t first:border-t-0 p-3 flex text-primary-focus"
				>
					<img
						src="https://avatars.dicebear.com/api/avataaars/Juan.svg"
						alt=""
						class=" w-12 rounded-full"
					/>
					<div class="flex-1 text-left overflow-hidden">
						<h1 class="">Juan Dela Cruz</h1>
						<p class="  whitespace-nowrap overflow-hidden text-ellipsis">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id explicabo nulla deleniti
							quidem iusto. Quod ipsa quis ratione fugit autem fuga sit quidem molestias accusantium
							impedit, necessitatibus soluta obcaecati distinctio ipsum voluptatum asperiores
							cupiditate eius eaque. Dolore voluptate ex earum dignissimos quidem excepturi
							obcaecati veniam, illum nulla iure aspernatur ea.
						</p>
					</div>
					<div>
						<h1>{relativeTimeFormatter(-2, 'day')}</h1>
						<div />
					</div>
				</a>
			{/each}
		</ul>
	</div>
</main>
