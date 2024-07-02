<script lang="ts">
	import { goto } from '$app/navigation';
	import { SESSION_LABEL } from '$scripts/cookie';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	getContext<Writable<string | undefined>>(SESSION_LABEL).set(undefined);
	goto('/');
</script>

Signing Out
