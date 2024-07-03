<script lang="ts">
	import Alert from '$components/Alert.svelte';
	import type { ActionData } from '$scripts/action';
	import { session } from '$scripts/store';
	import { onMount } from 'svelte';

	export let data: ActionData;

	let alert: Alert;
	let is_verified = false;

	onMount(() => {
		if (!data) {
			return;
		}
		if (!data.success) {
			alert.trigger(data.msg);
		}
	});
	if (data && data.success && data.msg.length != 0) {
		session.set(data.msg);
		is_verified = true;
	}
</script>

{#if is_verified}
	<div>Verified</div>
{:else}
	<div>Check your email for a verification link</div>
	<Alert bind:this={alert} />
{/if}
