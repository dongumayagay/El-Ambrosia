<script lang="ts">
	import { flip } from 'svelte/animate';
	import { fade } from 'svelte/transition';

	interface chatMessage {
		id: number;
		you: boolean;
		message: string;
	}
	let chatList: chatMessage[] = [
		{
			id: 1,
			you: true,
			message: 'pinagsasabi mo?'
		},
		{
			id: 0,
			you: false,
			message:
				'    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur est soluta nemo molestias perspiciatis ipsum. Doloremque, soluta ab dicta tempore atque reprehenderit velit, vel ad consectetur dolorum recusandae, porro modi?'
		}
	];

	const submit = (event: any) => {
		const form = event.target;
		const message = new FormData(form).get('message')?.toString() || '';
		chatList = [{ id: chatList.length, you: true, message: message }, ...chatList];
		if (form) form.reset();
	};
</script>

<main class="h-full">
	<div class="h-full overflow-y-auto w-full bg-base-300 flex flex-col-reverse gap-4 px-2 py-4">
		{#each chatList as chat (chat.id)}
			<div
				animate:flip={{ duration: 200 }}
				transition:fade|local={{ delay: 200 }}
				class={`flex items-start gap-2 ${chat.you ? 'flex-row-reverse' : 'flex-row'}`}
			>
				<img
					src={`https://avatars.dicebear.com/api/avataaars/${chat.you ? 'Don' : 'Juan'}.svg`}
					alt=""
					class="w-10 rounded-full"
				/>

				<div class="bg-base-100 p-2 rounded-xl max-w-xl">
					{chat.message}
				</div>
			</div>
		{/each}
	</div>
	<div class="btm-nav btm-nav-lg p-3 pb-6">
		<form on:submit|preventDefault={submit} class="form-control" autocomplete="off">
			<div class="input-group">
				<input
					name="message"
					type="text"
					placeholder="Message…"
					class="input input-bordered w-full"
				/>
				<button type="submit" class="btn btn-square">
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
