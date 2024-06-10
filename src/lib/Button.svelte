<script lang="ts">
	let mode: 'onmousedown' | 'onclick' = 'onclick';

	let label: string | undefined = undefined;
	let style: string | undefined = undefined;
	let type: 'button' | 'submit' | 'reset' | null | undefined = undefined;
	let handler = (event: MouseEvent) => {};

	export { label, style as class, type, handler, mode };
</script>

{#if mode == 'onclick'}
	<button on:click={handler} aria-label={label} class={style} {type}>
		<slot />
	</button>
{:else}
	<button on:mousedown={handler} aria-label={label} class={style} {type}>
		<slot />
	</button>
{/if}
