<script lang="ts">
	let contactInfo = {
		firstName: '',
		lastName: '',
		phoneNumber: ''
	};
</script>

<form class="grid gap-4 p-4">
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
	<button class=" btn btn-info" type="submit">Save</button>
</form>
