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
			id: 2,
			you: true,
			message:
				'ChargoggagoggmanchauggagoggchaubunagungamauggChargoggagoggmanchauggagoggchaubunagungamaugg'
		},
		{
			id: 1,
			you: true,
			message: 'pinagsasabi mo?'
		},
		{
			id: 0,
			you: false,
			message:
				'ChargoggagoggmanchauggagoggchaubunagungamauggChargoggagoggmanchauggagoggchaubunagungamauggLorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur est soluta nemo molestias perspiciatis ipsum. Doloremque, soluta ab dicta tempore atque reprehenderit velit, vel ad consectetur dolorum recusandae, porro modi?'
		}
	];

	const submit = (event: any) => {
		const form = event.target;
		const chatMessage = new FormData(form).get('message')?.toString() || '';
		console.log(chatMessage);
		chatList = [{ id: chatList.length, you: true, message: chatMessage }, ...chatList];
		if (form) form.reset();
		console.log(chatList);
	};
</script>

<main class="h-full">
	<div class="h-full overflow-y-auto w-full bg-base-300 flex flex-col-reverse gap-4 px-2 py-8">
		{#each chatList as chat (chat.id)}
			<div
				animate:flip={{ duration: 200 }}
				transition:fade|local={{ delay: 200 }}
				class={` flex gap-2 ${chat.you ? 'flex-row-reverse' : 'flex-row'}`}
			>
				<img
					src={`https://avatars.dicebear.com/api/avataaars/${chat.you ? 'Don' : 'Juan'}.svg`}
					alt=""
					class=" h-8 rounded-full"
				/>
				<div class="flex">
					<div
						class="bg-base-100 min-h-8 min-w-fit break-all whitespace-pre-wrap text-primary-focus p-2 rounded-xl"
					>
						{chat.message}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="btm-nav btm-nav-lg p-3 pb-6 h-auto">
		<form on:submit|preventDefault={submit} class="form-control" autocomplete="off">
			<div class="input-group">
				<textarea
					name="message"
					type="text"
					placeholder="Message…"
					class="input input-bordered w-full text-primary-focus whitespace-pre-wrap h-16"
					required
				/>
				<button type="submit" class="btn btn-square h-full">
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
