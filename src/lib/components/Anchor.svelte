<script lang="ts">
	import { goto } from '$app/navigation';

	let mode: 'onmousedown' | 'onclick' = 'onclick';

	let href: string | undefined = undefined;
	let label: string | undefined = undefined;
	let style: string | undefined = undefined;
	let handler: () => Promise<void> | void = () => {};

	export { href, label, style as class, mode, handler };
</script>

{#if mode == 'onclick'}
	<a {href} on:click={() => handler()} aria-label={label} class={style}
		><slot /></a>
{:else}
	<a
		on:mousedown={() => {
			handler();
			if (href) {
				goto(href);
			}
		}}
		on:click|preventDefault
		{href}
		aria-label={label}
		class={style}><slot /></a>
{/if}
