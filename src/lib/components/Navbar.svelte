<script>
	import { page } from '$app/stores';
	$: pathname = $page.url.pathname;
</script>

<nav class="max-h-14 mt-auto px-2 flex border-t border-orange-200/60  stroke-orange-200/60">
	<a
		class={`flex-1 flex justify-center aspect-square h-full ${
			pathname == '/' ? 'stroke-red-600' : ''
		} transition-colors`}
		href="/"
	>
		<div class="relative h-full aspect-square grid place-items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				class="w-6 h-6 stroke-inherit"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
				/>
			</svg>
		</div>
	</a>
	<a
		class={`flex-1 flex justify-center aspect-square h-full ${
			pathname == '/cart' ? 'stroke-red-600' : ''
		} transition-colors`}
		href="/cart"
	>
		<div class="relative h-full aspect-square grid place-items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				class="w-6 h-6 stroke-inherit"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
				/>
			</svg>
			<div class="absolute top-[15%] right-[15%] text-right text-xs  font-bold ">69</div>
		</div>
	</a>
	<a
		class={`flex-1 flex justify-center aspect-square h-full ${
			pathname == '/orders' ? 'stroke-red-600' : ''
		} transition-colors`}
		href="/orders"
	>
		<div class="relative h-full aspect-square grid place-items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				class="w-6 h-6 stroke-inherit"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
				/>
			</svg>
			<span
				class="absolute top-[25%] right-[20%] bg-yellow-500 aspect-square rounded-full w-2.5 animate-bounce"
			/>
		</div>
	</a>
	<a
		class={`flex-1 flex justify-center aspect-square h-full ${
			pathname == '/account' ? 'stroke-red-600' : ''
		} transition-colors`}
		href="/account"
	>
		<div class="relative h-full aspect-square grid place-items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				class="w-6 h-6 stroke-inherit"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
				/>
			</svg>
		</div>
	</a>
</nav>
