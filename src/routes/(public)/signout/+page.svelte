<script lang="ts">
	import { goto } from '$app/navigation';
	import { session } from '$scripts/store';
	import { onMount } from 'svelte';

	onMount(() => {
		session.set(undefined);
		goto('/');
	});
</script>

Signing Out
