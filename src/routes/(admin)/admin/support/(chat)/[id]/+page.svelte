<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';
	let chatList = [...Array(1).keys()];
</script>

<main class="h-full">
	<div class="h-full overflow-y-auto w-full bg-base-300 flex flex-col-reverse gap-4 px-2 py-4">
		{#each chatList as i (i)}
			<div
				animate:flip={{ duration: 200 }}
				transition:fade={{ delay: 200 }}
				class="flex items-start gap-2"
			>
				<img
					src="https://avatars.dicebear.com/api/avataaars/Juan.svg"
					alt=""
					class=" w-10 rounded-full"
				/>
				<div class="bg-base-100 p-2 rounded-xl">
					<!-- {chatList.at((i + 1) * -1)} -->
					{i}
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi corrupti totam aperiam doloribus
					cumque dolor dignissimos! Nam consectetur mollitia repellendus.
				</div>
			</div>
		{/each}
	</div>
	<div class="btm-nav btm-nav-lg p-3 pb-6">
		<form
			on:submit|preventDefault={() => {
				chatList = [chatList.length, ...chatList];
			}}
			class="form-control"
		>
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
