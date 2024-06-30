<script lang="ts">
	import { PUBLIC_SITE_KEY } from '$env/static/public';

	export let success: (t: string) => Promise<void> | void = () => {};
	export let failure: () => void = () => {};

	// https://svelte.dev/repl/26eb317f0dc24be4b692086ab76922cb?version=4.2.18
	export function trigger() {
		grecaptcha.ready(() => {
			grecaptcha
				.execute(PUBLIC_SITE_KEY, { action: 'submit' })
				.then(success)
				.catch(failure);
		});
	}
</script>

<svelte:head>
	<script
		src="https://www.google.com/recaptcha/api.js?render={PUBLIC_SITE_KEY}"
		async
		defer></script>
</svelte:head>
