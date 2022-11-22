<script lang="ts">
	import { SHAWARMAS } from '$lib/constants';
</script>

<section class="">
	<div id="Menu" class="grid gap-6 px-4 py-12 mx-auto max-w-7xl">
		<h1 class="text-xl tracking-widest text-center uppercase font-anton">Menu</h1>
		<section class="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-y-6">
			{#each SHAWARMAS as item}
				<div class="max-w-sm shadow-xl card bg-base-200">
					<figure class=" bg-base-content aspect-square">
						<img class="object-cover w-full h-full " src={item.image} alt={item.name} />
					</figure>
					<div class="card-body">
						<h2 class="tracking-widest uppercase card-title font-anton">{item.name}</h2>
						<p class=" text-primary-focus">
							{item.description}
						</p>
						<div class="justify-end card-actions">
							<button class="btn btn-secondary">Buy now</button>
						</div>
					</div>
				</div>
			{/each}
		</section>
	</div>
</section>
