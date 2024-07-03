<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import logo from '$assets/logo-vertical.svg';

	let width: number;
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
