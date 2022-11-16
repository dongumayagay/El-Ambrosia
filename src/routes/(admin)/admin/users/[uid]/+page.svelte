<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const uid = data.uid;
</script>

<h1>{uid}</h1>
