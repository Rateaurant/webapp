<script lang="ts">
	import alert from '$lib/alert.svg';

	export let message: string | undefined;
	export let trigger: boolean | undefined;
</script>

{#if trigger}
	<div
		aria-label={message}
		class="flex justify-center items-center gap-5 bg-primary pt-3 pb-3 rounded-xl border-primary border-2 bg-opacity-50">
		<img src={alert} alt="Alert" width={48} />
		{message}
	</div>
{/if}
