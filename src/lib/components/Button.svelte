<script lang="ts">
	let mode: 'onmousedown' | 'onclick' = 'onclick';

	let label: string | undefined = undefined;
	let style: string | undefined = undefined;
	let type: 'button' | 'submit' | 'reset' | null | undefined = undefined;
	let handler = (event: MouseEvent) => {};
	let disableOnClick: boolean = false;

	let disabled = false;
	export function enable() {
		disabled = false;
	}

	export { label, style as class, type, handler, mode, disableOnClick };
</script>

{#if false}
	<div class="cursor-wait"></div>
{/if}

{#if mode == 'onclick'}
	<button
		on:click={(e) => {
			handler(e);
			if (disableOnClick) {
				disabled = true;
			}
		}}
		{disabled}
		aria-label={label}
		class={style ? style : '' + disabled ? ' cursor-wait' : ''}
		{type}>
		<slot />
	</button>
{:else}
	<button
		on:mousedown={(e) => {
			handler(e);
			if (disableOnClick) {
				disabled = true;
			}
		}}
		{disabled}
		aria-label={label}
		class={style ? style : '' + disabled ? ' cursor-wait' : ''}
		{type}>
		<slot />
	</button>
{/if}
