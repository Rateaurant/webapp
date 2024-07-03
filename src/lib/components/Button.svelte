<script lang="ts">
	import loadingIcon from '$assets/loading.svg';

	let mode: 'onmousedown' | 'onclick' = 'onclick';

	let label: string | undefined = undefined;
	let style: string | undefined = undefined;
	let type: 'button' | 'submit' | 'reset' | null | undefined = undefined;
	let handler = (event: any) => {};
	let loading: boolean = false;

	export function resolve() {
		loading = false;
	}
	export function loadingTrigger() {
		loading = true;
	}

	export { label, style as class, type, handler, mode, loading };

	const button_data = {
		disabled: loading,
		'aria-label': label,
		class: style,
		type: type,
	};
</script>

{#if mode == 'onclick'}
	{#if type == 'submit'}
		<button {...button_data}>
			{#if loading}
				<div class="flex justify-center items-center">
					<img class="loading" src={loadingIcon} alt="Loading" width={48} />
				</div>
			{:else}
				<slot />
			{/if}
		</button>
	{:else}
		<button on:click={handler} {...button_data}>
			{#if loading}
				<div class="flex justify-center items-center">
					<img class="loading" src={loadingIcon} alt="Loading" width={48} />
				</div>
			{:else}
				<slot />
			{/if}
		</button>
	{/if}
{:else}
	<!-- TODO: Fuck mouse down on submit -->
	<button on:mousedown={handler} {...button_data}>
		{#if loading}
			<div class="flex justify-center items-center">
				<img class="loading" src={loadingIcon} alt="Loading" width={48} />
			</div>
		{:else}
			<slot />
		{/if}
	</button>
{/if}

<style>
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.loading {
		animation: spin 1s infinite;
	}
</style>
