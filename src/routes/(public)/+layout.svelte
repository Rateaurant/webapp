<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import logo from '$assets/logo-vertical.svg';
	import { writable } from 'svelte/store';
	import { setContext } from 'svelte';
	import { EMAIL_LABEL, PASSWORD_LABEL, USERNAME_LABEL } from '$scripts/server';

	let width: number;

	const email = writable('');
	const username = writable('');
	const password = writable('');

	setContext(EMAIL_LABEL, email);
	setContext(USERNAME_LABEL, username);
	setContext(PASSWORD_LABEL, password);
</script>

<svelte:window bind:innerWidth={width} />

<main class="flex flex-col gap-16 items-center">
	<Anchor href="/" label="Go back the landing page">
		<img
			aria-label="Branding"
			src={logo}
			alt="Rateaurant Logo"
			width={width > 500 / 0.8 ? 500 : width * 0.8} />
	</Anchor>
	<slot />
</main>
