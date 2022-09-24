<script lang="ts">
	import { supabase } from '$lib/supabase/client';
	import '../app.postcss';
	console.log(supabase);
</script>

<slot />
