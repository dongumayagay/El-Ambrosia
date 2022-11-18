<script lang="ts">
	import { auth } from '$lib/firebase/client';
	import { signInWithEmailAndPassword } from 'firebase/auth';
	import toast from 'svelte-french-toast';
	import AuthFormWrapper from '../AuthFormWrapper.svelte';
	// import type { PageData } from './$types';

	// export let data: PageData;

	let loading = false;

	const submitHandler = async (event: SubmitEvent) => {
		loading = true;
		try {
			const form = event.target as HTMLFormElement;
			const data = new FormData(form);
			const email = data.get('email')?.toString();
			const password = data.get('password')?.toString();
			if (!email || !password) throw 'invalid email or password';
			await signInWithEmailAndPassword(auth, email, password);

			form.reset();
		} catch (error) {
			toast.error(error as string);
		}
		loading = false;
	};
</script>

<AuthFormWrapper>
	<h1 class="text-2xl tracking-widest text-center font-anton">LOGIN</h1>
	<button class="gap-2 btn btn-block btn-primary">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="w-6"
			><path
				fill="#FFC107"
				d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
			/><path
				fill="#FF3D00"
				d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
			/><path
				fill="#4CAF50"
				d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
			/><path
				fill="#1976D2"
				d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
			/></svg
		>
		signin with google
	</button>
	<form class="flex flex-col w-full " on:submit|preventDefault={submitHandler}>
		<div class="divider">OR</div>
		<div class="form-control">
			<h6 class="label">
				<span class="label-text">Email Adress</span>
			</h6>
			<input
				required
				name="email"
				type="email"
				placeholder="Email Address"
				class=" input input-bordered"
			/>
		</div>
		<div class="form-control">
			<h6 class="label">
				<span class="label-text">Password</span>
			</h6>
			<input
				required
				name="password"
				type="password"
				placeholder="Password"
				class=" input input-bordered"
			/>
		</div>
		<button class="mt-4 btn gap-2" disabled={loading}>
			{#if loading}
				<svg
					class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
				>
					<circle
						class="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="currentColor"
						stroke-width="4"
					/>
					<path
						class="opacity-75"
						fill="currentColor"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					/>
				</svg>
			{/if}
			Login</button
		>
	</form>
	<h6>
		Don't have have and account?
		<a class="font-bold" href="/auth/register"> Create one </a>
	</h6>
</AuthFormWrapper>
