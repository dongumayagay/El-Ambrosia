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

	const submit = (event: SubmitEvent) => {
		const form = event.target as HTMLFormElement;
		const chatMessage = new FormData(form).get('message')?.toString() || '';
		console.log(chatMessage);
		chatList = [{ id: chatList.length, you: true, message: chatMessage }, ...chatList];
		form.reset();
	};
</script>

<main class="h-full">
	<div class="flex flex-col-reverse w-full h-full gap-4 px-2 py-8 overflow-y-auto bg-base-300">
		{#each chatList as chat (chat.id)}
			<div
				animate:flip={{ duration: 200 }}
				transition:fade|local={{ delay: 200 }}
				class={` flex gap-2 ${chat.you ? 'flex-row-reverse' : 'flex-row'}`}
			>
				<img
					src={`https://avatars.dicebear.com/api/avataaars/${chat.you ? 'Don' : 'Juan'}.svg`}
					alt=""
					class="h-8 rounded-full "
				/>
				<div class="flex">
					<div
						class="p-2 break-all whitespace-pre-wrap bg-base-100 min-h-8 min-w-fit text-primary-focus rounded-xl"
					>
						{chat.message}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<div class="h-auto p-3 pb-6 btm-nav btm-nav-lg">
		<form on:submit|preventDefault={submit} class="form-control" autocomplete="off">
			<div class="input-group">
				<textarea
					name="message"
					type="text"
					placeholder="Message…"
					class="w-full h-16 whitespace-pre-wrap input input-bordered text-primary-focus"
					required
				/>
				<button type="submit" class="h-full btn btn-square">
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
