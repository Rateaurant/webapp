<script lang="ts">
	import alert from '$assets/alert.svg';
	import close from '$assets/close.svg';
	import Button from './Button.svelte';

	let message: string | undefined;
	let show: boolean | undefined;

	export function trigger(msg: string) {
		message = msg;
		show = true;
	}

	let is_sm: boolean;
	let width: number;
	$: is_sm = width < 640;
</script>

<svelte:window bind:innerWidth={width} />

{#if show}
	<div
		aria-label={message}
		class="flex justify-between text-sm sm:text-xl items-center gap-5 bg-primary pt-3 pb-3 rounded-xl border-primary border-2 bg-opacity-50">
		<Button class="ml-4" handler={() => (show = false)}>
			<img src={close} alt="Close alert" width={24} />
		</Button>
		<div class="flex items-center gap-5">
			<img src={alert} alt="Alert" width={is_sm ? 24 : 48} />
			{message}
		</div>
		<div></div>
	</div>
{/if}
