<script lang="ts">
	import { goto } from '$app/navigation';
	import type { CreateRequest, UserRecord } from 'firebase-admin/auth';

	async function submitHandler(event: SubmitEvent) {
		try {
			const form = event.target as HTMLFormElement;
			const formData = new FormData(form);
			const inputs = Object.fromEntries(formData);
			const data: CreateRequest = {
				displayName: inputs?.displayName.toString() ?? undefined,
				email: inputs?.email.toString() ?? undefined,
				password: inputs?.password.toString() ?? undefined
			};
			const response = await fetch('/api/users', {
				method: 'POST',
				body: JSON.stringify(data)
			});
			const user: UserRecord = await response.json();
			await goto(`/admin/users/${user.uid}`, { replaceState: true });
		} catch (error) {
			console.log(error);
			alert(error);
		}
	}
</script>

<form
	class="w-full max-w-xl pt-8 mx-auto form-control"
	on:submit|preventDefault={submitHandler}
	autocomplete="off"
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
	<button type="submit" class="btn">Create User</button>
</form>
