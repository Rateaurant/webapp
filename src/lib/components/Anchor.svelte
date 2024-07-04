<script lang="ts">
	import { goto } from '$app/navigation';

	let mode: 'onmousedown' | 'onclick' = 'onclick';

	let href: string | undefined = undefined;
	let label: string | undefined = undefined;
	let style: string | undefined = undefined;
	let handler: () => Promise<void> | void = () => {};
	let force_reload: boolean = false;
	let preload_on: 'hover' | 'tap' = 'hover';

	export {
		href,
		label,
		style as class,
		mode,
		handler,
		force_reload,
		preload_on,
	};

	const data = {
		'aria-label': label,
		class: style,
		'data-sveltekit-reload': force_reload ? true : false,
		'data-sveltekit-preload-data': preload_on,
	};
</script>

{#if mode == 'onclick'}
	<a {href} on:click={() => handler()} {...data}><slot /></a>
{:else}
	<!-- svelte-ignore a11y-missing-attribute -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<a
		on:mousedown={() => {
			handler();
			if (href) {
				goto(href);
			}
		}}
		{...data}><slot /></a>
{/if}
