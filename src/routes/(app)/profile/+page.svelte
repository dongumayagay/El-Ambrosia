<script lang="ts">
	import { db } from '$lib/firebase/client';
	import { userStore } from '$lib/stores';
	import { doc, getDoc, setDoc } from 'firebase/firestore';
	import toast from 'svelte-french-toast';

	type ContactInfo = {
		firstName: string;
		lastName: string;
		phoneNumber: string;
	};

	let contactInfo: ContactInfo = {
		firstName: '',
		lastName: '',
		phoneNumber: ''
	};
	let loading = false;

	const getUserProfile = async () => {
		if (!$userStore) return;
		const docSnapshot = await getDoc(doc(db, 'userProfiles', $userStore.uid));
		if (!docSnapshot.exists()) return;
		contactInfo = docSnapshot.data() as ContactInfo;
	};
	const submitHandler = async () => {
		if (!$userStore) return;
		loading = true;
		try {
			await setDoc(doc(db, 'userProfiles', $userStore.uid), contactInfo);
			getUserProfile();
			toast.success('saved');
		} catch (error: any) {
			if (error?.code)
				toast.error(error.code.split('/')[1].replaceAll('-', ' '), {
					className: 'uppercase'
				});
			else toast.error(error as string);
		}
		loading = false;
	};

	$: $userStore && getUserProfile();
</script>

<form on:submit|preventDefault={submitHandler} class="grid gap-4 p-4">
	<label class="form-control">
		<h1>Enter your first name</h1>
		<input
			class="input input-bordered peer"
			type="text"
			placeholder="Juan"
			required
			bind:value={contactInfo.firstName}
			title="Please enter a your first name"
		/>
		<p class={`text-red-500 hidden ${contactInfo.firstName !== '' ? 'peer-invalid:block' : ''}`}>
			Please enter your first name
		</p>
	</label>
	<label class="form-control">
		<h1>Enter your last name</h1>
		<input
			class="input input-bordered peer"
			type="text"
			placeholder="Dela Cruz"
			required
			bind:value={contactInfo.lastName}
			title="Please enter a your last name"
		/>
		<p class={`text-red-500 hidden ${contactInfo.lastName !== '' ? 'peer-invalid:block' : ''}`}>
			Please enter your last name
		</p>
	</label>
	<label class="form-control">
		<h1>Enter your phone number</h1>
		<input
			class="input input-bordered peer"
			type="tel"
			pattern={String.raw`^(09|\+639)\d{9}$`}
			placeholder="+639876543210 or 09876543210"
			required
			bind:value={contactInfo.phoneNumber}
			title="Please enter a your phone number"
		/>
		<p class={`text-red-500 hidden ${contactInfo.phoneNumber !== '' ? 'peer-invalid:block' : ''}`}>
			Invalid phone number
		</p>
	</label>
	<button class=" btn btn-info gap-2" disabled={loading} type="submit">
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
		Save</button
	>
</form>
