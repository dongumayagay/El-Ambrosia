<script lang="ts">
	import { relativeTimeFormatter } from '$lib/utils';
</script>

<a
	href="/admin/support/1"
	class="bg-base-300 border-t first:border-t-0 p-3 flex text-primary-focus"
>
	<img
		src="https://avatars.dicebear.com/api/avataaars/Juan.svg"
		alt=""
		class=" w-12 rounded-full"
	/>
	<div class="flex-1 text-left overflow-hidden">
		<h1 class="">Juan Dela Cruz</h1>
		<p class="  whitespace-nowrap overflow-hidden text-ellipsis">
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id explicabo nulla deleniti quidem
			iusto. Quod ipsa quis ratione fugit autem fuga sit quidem molestias accusantium impedit,
			necessitatibus soluta obcaecati distinctio ipsum voluptatum asperiores cupiditate eius eaque.
			Dolore voluptate ex earum dignissimos quidem excepturi obcaecati veniam, illum nulla iure
			aspernatur ea.
		</p>
	</div>
	<div>
		<h1>{relativeTimeFormatter(-2, 'day')}</h1>
		<div />
	</div>
</a>
