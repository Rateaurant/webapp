<script lang="ts">
	import Alert from '$components/Alert.svelte';
	import type { Action } from '$scripts/action';
	import { session } from '$scripts/store';
	import { onMount } from 'svelte';

	export let data: Action & { type: 'success' | 'failure' };

	let alert: Alert;
	let is_verified = false;

	onMount(() => {
		if (data.type == 'success') {
			session.set(data.message);
			is_verified = true;
		} else {
			alert.trigger(data.message);
		}
	});
</script>

{#if is_verified}
	<div>Verified</div>
{:else}
	<div>Check your email for a verification link</div>
	<Alert bind:this={alert} />
{/if}
