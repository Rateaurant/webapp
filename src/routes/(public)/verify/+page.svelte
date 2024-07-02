<script lang="ts">
	import Alert from '$components/Alert.svelte';
	import type { ActionData } from '$scripts/action';
	import { EMAIL_LABEL } from '$scripts/server';
	import { getContext, onMount } from 'svelte';
	import type { Writable } from 'svelte/store';

	export let data: ActionData;

	const email = getContext<Writable<string>>(EMAIL_LABEL);
	let alert: Alert;

	onMount(() => {
		if (data && !data.success) {
			alert.trigger(data.msg);
		}
	});
</script>

<div>Verification Code is send to <b>{$email}</b></div>
<Alert bind:this={alert} />
