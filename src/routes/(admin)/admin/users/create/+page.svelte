<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance, applyAction, type SubmitFunction } from '$app/forms';
	import type { ActionResult } from '@sveltejs/kit';
	import toast from 'svelte-french-toast';

	let loading = false;

	const submitHandler: SubmitFunction = () => {
		loading = true;
		return async ({ result }: { result: ActionResult }) => {
			if (result.type === 'redirect') {
				await applyAction(result);
				await goto(result.location, { replaceState: true });
				return;
			} else if (result.type === 'error') {
				console.log(result.error);
				toast.error(result.error?.message ?? 'Error');
			}
			loading = false;
		};
	};
</script>

<form
	class="w-full max-w-xl pt-8 mx-auto form-control"
	autocomplete="off"
	method="POST"
	use:enhance={submitHandler}
>
	<h1 class="text-xl font-bold text-center">Create new User</h1>

	<label class="label" for="displayName">
		<span class="label-text">*Enter new user name </span>
	</label>
	<input
		class="input"
		placeholder="Name"
		type="text"
		name="displayName"
		required
		title="Enter name of the user"
	/>
	<label class="label" for="email">
		<span class="label-text">*Enter new user email </span>
	</label>
	<input
		class="input"
		placeholder="Email"
		type="email"
		name="email"
		required
		autocomplete="email"
		title="enter the email of the user"
	/>
	<label class="label" for="password">
		<span class="label-text">*Enter new user password </span>
	</label>
	<input
		class="input"
		placeholder="Password"
		type="password"
		name="password"
		required
		autocomplete="new-password"
	/>
	<label for="submit" class="label">
		<span class=" label-text" />
	</label>
	<button type="submit" class="btn btn-secondary" disabled={loading}>
		{#if loading}
			<svg
				class="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
				<path
					class="opacity-75"
					fill="currentColor"
					d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				/>
			</svg>
		{/if}
		Create User
	</button>
</form>
