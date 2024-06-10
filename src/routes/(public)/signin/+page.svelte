<script>
	import Anchor from '$lib/Anchor.svelte';
	import Button from '$lib/Button.svelte';
	import logo from '$lib/logo-vertical.svg';
</script>

<main class="flex flex-col gap-20 items-center">
	<img aria-label="Branding" src={logo} alt="Rateaurant Logo" width={500} />
	<form
		class="flex flex-col bg-dark-20 rounded-3xl text-xl
        drop-shadow-3xl mb-10 w-1/4">
		<div class="flex flex-col gap-10 p-10">
			<input
				aria-label="Email input"
				aria-required="true"
				class="bg-dark-15 rounded-3xl text-center p-3"
				placeholder="Email" />
			<input
				aria-label="Password input"
				aria-required="true"
				class="bg-dark-15 rounded-3xl text-center p-3"
				placeholder="Password" />

			<!-- TODO href -->
			<Anchor
				label="I forgot my password"
				href="/"
				class="self-center text-center">I forgot my password</Anchor>
		</div>
		<Button
			label="Sign in to Rateaurant!"
			class="bg-gradient-to-r from-secondary to-primary p-5
            rounded-b-3xl text-3xl hover:scale-125 transition-all duration-200 ease-out rounded-br-3xl"
			type="submit">Sign In!</Button>
	</form>
</main>
