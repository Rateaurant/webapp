<script lang="ts">
	import { goto } from '$app/navigation';

	let mode: 'onmousedown' | 'onclick' = 'onclick';

	let href: string | undefined = undefined;
	let label: string | undefined = undefined;
	let style: string | undefined = undefined;

	export { href, label, style as class, mode };
</script>

{#if mode == 'onclick'}
	<a {href} aria-label={label} class={style}><slot /></a>
{:else}
	<a
		on:mousedown={() => {
			if (href) {
				goto(href);
			}
		}}
		on:click|preventDefault
		{href}
		aria-label={label}
		class={style}><slot /></a>
{/if}
