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
	let buttonOffsetWidth: number;
	$: is_sm = width < 640;
</script>

<svelte:window bind:innerWidth={width} />

{#if show}
	<div
		aria-label={message}
		class="flex justify-between text-sm sm:text-xl items-center gap-5 bg-primary pt-3 pb-3 rounded-xl border-primary border-2 bg-opacity-50">
		<!-- https://stackoverflow.com/questions/68077135/how-do-i-get-offset-width-of-a-div-in-svelte -->
		<div bind:offsetWidth={buttonOffsetWidth}>
			<Button
				label="Click is button to close the alert"
				class="ml-4"
				handler={() => (show = false)}>
				<img src={close} alt="Close alert" width={24} />
			</Button>
		</div>
		<div class="flex items-center gap-5">
			<img src={alert} alt="Alert" width={is_sm ? 24 : 48} />
			{message}
		</div>

		{#if is_sm}
			<!-- Centering a fixed amount on small screen -->
			<div aria-label="Spacing; Ignore" class="min-w-4"></div>
		{:else}
			<!-- Centering the message -->
			<!-- https://stackoverflow.com/questions/4171286/how-to-make-a-div-with-no-content-have-a-width -->
			<div
				aria-label="Spacing; Ignore"
				style="min-width: ${buttonOffsetWidth}px">
			</div>
		{/if}
	</div>
{/if}
