<script>
	import SideCartToggle from './SideCartToggle.svelte';
</script>

<div class="drawer-side">
	<label for="sideDrawerCart" class="drawer-overlay" />
	<ul class="p-4 menu w-full max-w-lg bg-base-200 text-base-content">
		<div class="flex items-center justify-between">
			<h1 class="text-xl font-semibold">Your Cart</h1>
			<SideCartToggle />
		</div>
		<!-- Sidebar content here -->
		<li>Sidebar Item 1</li>
		<li>Sidebar Item 2</li>
	</ul>
</div>
