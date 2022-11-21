<script lang="ts">
	import { page } from '$app/stores';

	$: paths = $page.url.pathname.split('/');
</script>

<div class="transition navbar bg-base-100">
	<div class="navbar-start">
		<label for="sidenav" class="btn btn-ghost btn-circle drawer-button lg:hidden">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="w-5 h-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h7"
				/>
			</svg>
		</label>
	</div>
	<div class="navbar-center">
		<h1 class="text-xl font-medium normal-case">ADMIN</h1>
	</div>
	<div class="navbar-end">
		<button
			class={`${paths.length < 4 ? 'hidden' : ''} btn btn-circle btn-ghost`}
			on:click={() => history.back()}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="w-6 h-6"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
				/>
			</svg>
		</button>
	</div>
</div>
