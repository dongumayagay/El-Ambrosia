<script lang="ts">
	import { goto } from '$app/navigation';
	import { enhance, applyAction } from '$app/forms';

	let loading = false;
</script>

<form
	class="w-full max-w-xl pt-8 mx-auto form-control"
	autocomplete="off"
	method="POST"
	use:enhance={() => {
		loading = true;
		return async ({ result }) => {
			if (result.type === 'redirect') {
				console.log('redirect');
				await applyAction(result);
				await goto(result.location, { replaceState: true });
				return;
			} else if (result.type === 'error') {
				console.log(result.error);
				alert(result.error?.message ?? 'Error');
			}
			loading = false;
		};
	}}
>
	<!-- on:submit|preventDefault={submitHandler} -->
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
	<!-- <label class="label" for="email">
		<span class="label-text">Enter new user phone number </span>
	</label>
	<input
		class="input"
		placeholder="Phone"
		type="text"
		name="phoneNumber"
		pattern={String.raw`^(09|\+639)\d{9}$`}
		title="Enter a valid phone number"
		autocomplete="tel"
	/> -->
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
	<button type="submit" class="btn " disabled={loading}>
		{#if loading}
			<svg
				class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
		Create User</button
	>
</form>
