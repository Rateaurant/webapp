<script>
	import Anchor from '$lib/components/Anchor.svelte';
	import logo from '$lib/assets/logo-vertical.svg';
</script>

<main class="flex flex-col gap-16 items-center">
	<Anchor href="/" mode="onclick" label="Go back the landing page">
		<img aria-label="Branding" src={logo} alt="Rateaurant Logo" width={500} />
	</Anchor>
	<slot />
</main>
