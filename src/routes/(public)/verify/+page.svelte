<script lang="ts">
	import { EMAIL_LABEL } from '$scripts/server';
	import { getContext } from 'svelte';

	const email = getContext<string>(EMAIL_LABEL);
	const is_owner = getContext<boolean>('is_owner');
</script>

<form method="post" action="?/is_user">
	<div>Verification Code is send to <b>{email}</b></div>
	<input type="number" name="code" />
	{#if is_owner}
		<button formaction="?/is_owner">Verify</button>
	{:else}
		<button>Verify</button>
	{/if}
</form>
