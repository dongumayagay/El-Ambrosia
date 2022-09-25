<script>
	import { relativeTimeFormatter } from '$lib/utils';
</script>

<nav class="fixed z-10 w-full bg-base-100/5 top-0">
	<div class="navbar mx-auto max-w-7xl ">
		<div class="flex-1">
			<img
				src="https://avatars.dicebear.com/api/avataaars/Juan.svg"
				alt=""
				class=" w-8 rounded-full"
			/>
			<span class="pl-4 font-medium">Juan Dela Cruz</span>
		</div>
		<a href="/admin/support" class="btn btn-sm btn-primary btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				class="w-5 h-5"
			>
				<path
					fill-rule="evenodd"
					d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
					clip-rule="evenodd"
				/>
				<path
					fill-rule="evenodd"
					d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z"
					clip-rule="evenodd"
				/>
			</svg>
		</a>
	</div>
</nav>

<main class="h-full">
	<div class="h-full overflow-y-auto w-full bg-base-300 ">
		<ul class="w-full flex flex-col gap-4 px-2 pb-4">
			{#each { length: 20 } as _}
				<div class="flex items-start gap-2">
					<img
						src="https://avatars.dicebear.com/api/avataaars/Juan.svg"
						alt=""
						class=" w-10 rounded-full"
					/>
					<div class="bg-base-100 p-2 rounded-xl">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corrupti totam aperiam
						doloribus cumque dolor dignissimos! Nam consectetur mollitia repellendus.
					</div>
				</div>
			{/each}
		</ul>
	</div>
	<div class="btm-nav btm-nav-lg p-3 pb-6">
		<form on:submit|preventDefault class="form-control">
			<div class="input-group">
				<input type="text" placeholder="Message…" class="input input-bordered w-full" />
				<button class="btn btn-square">
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
							d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
						/>
					</svg>
				</button>
			</div>
		</form>
	</div>
</main>
