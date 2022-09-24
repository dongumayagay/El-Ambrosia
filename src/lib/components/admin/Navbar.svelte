<script>
	import Links from './Links.svelte';
</script>

<div class="bg-base-200 z-20 fixed top-0 inset-x-0">
	<nav class="w-full bg-base-200 z-10 max-w-7xl mx-auto navbar">
		<div class="flex-none lg:hidden">
			<label for="my-drawer-3" class="btn btn-square btn-ghost">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block w-6 h-6 stroke-current"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16"
					/></svg
				>
			</label>
		</div>
		<div class="flex-1 px-2 mx-2 font-bold">ADMIN</div>
		<div class="flex-none hidden lg:block">
			<ul class="menu menu-horizontal gap-3 px-2">
				<Links />
			</ul>
		</div>
	</nav>
</div>
