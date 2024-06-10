<script lang="ts">
	// import { onMount } from 'svelte';

	let mode: 'onmousedown' | 'onclick' = 'onmousedown';

	let href: string | undefined = undefined;
	let label: string | undefined = undefined;
	let style: string | undefined = undefined;

	// Ignore this please
	// let anchor: HTMLAnchorElement | undefined = undefined;
	// onMount(() => {
	// 	if (mode == 'onclick') {
	// 		return;
	// 	}
	// 	if (anchor == undefined) {
	// 		return;
	// 	}

	// 	anchor.onmousedown = () => anchor?.onclick;
	// 	anchor.removeEventListener('click', () => {});
	// });

	export { href, label, style as class, mode };
</script>

{#if mode == 'onclick'}
	<a {href} aria-label={label} class={style}><slot /></a>
{:else}
	<a {href} aria-label={label} class={style}><slot /></a>
	<!-- <a bind:this={anchor} {href} aria-label={label} class={style}><slot /></a> -->
{/if}
