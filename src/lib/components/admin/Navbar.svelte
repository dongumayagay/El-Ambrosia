<script lang="ts">
	import Links from './Links.svelte';
	import { page } from '$app/stores';
	$: adminPage = $page.url.pathname.split('/').at(-1);
</script>

<div class="bg-base-100 z-20 fixed top-0 inset-x-0">
	<nav class="w-full z-10 max-w-7xl mx-auto navbar">
		<div class="flex-1 px-2 mx-2 font-bold uppercase">{adminPage}</div>
		<div class="flex-none hidden lg:block">
			<ul class="menu menu-horizontal gap-3 px-2">
				<Links />
			</ul>
		</div>
		<div class="flex-none lg:block">
			<ul class="menu menu-horizontal gap-3 px-2">
				<li>
					<a href="/" class="btn btn-link font-medium gap-2">
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
								d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
							/>
						</svg>
					</a>
				</li>
			</ul>
		</div>
	</nav>
</div>
