<script lang="ts">
	export let options: string[];
</script>

<form class="form-control w-full">
	<label class="input-group">
		<select class="select flex-1 sm:max-w-xs rounded-none rounded-l-lg">
			{#each options as option}
				<option>{option}</option>
			{/each}
		</select>
		<label class="swap swap-rotate btn btn-square">
			<input type="checkbox" class="invisible" />

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 swap-off"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
				/>
			</svg>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6 swap-on"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12"
				/>
			</svg>
		</label>
	</label>
</form>
