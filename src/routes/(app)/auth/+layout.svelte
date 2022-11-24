<script lang="ts">
	import { goto } from '$app/navigation';
	import Splash from '$lib/components/Splash.svelte';
	import { userStore } from '$lib/stores';

	$: if ($userStore) goto('/');
</script>

{#if $userStore !== null}
	<Splash />
{:else}
	<main class="grid py-16 bg-base-100 sm:bg-base-200 place-items-center">
		<div
			class="flex flex-col items-center w-full max-w-sm gap-4 p-6 rounded-lg sm:shadow-lg bg-base-100"
		>
			<slot />
		</div>
	</main>
{/if}
