<script>
	import '../app.postcss';
	import Navbar from '$lib/components/Navbar.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<svelte:head><title>El Ambrosia</title></svelte:head>

<main class="h-full min-h-full flex flex-col text-orange-100/75">
	<main class="flex-1 flex flex-col overflow-hidden">
		<header class="flex justify-center py-4">
			<Logo />
		</header>
		<slot />
		<Navbar />
	</main>
</main>
