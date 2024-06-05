<script>
	import logo from '$lib/logo-vertical.svg';
</script>

<main class="flex flex-col gap-20 items-center">
	<img src={logo} alt="Rateaurant Logo" width={500} />
	<form
		class="flex flex-col bg-dark-20 rounded-3xl text-3xl w-[40%]
        drop-shadow-3xl mb-10">
		<div class="flex flex-col gap-10 p-10">
			<input
				aria-label="Email input"
				class="bg-dark-15 rounded-3xl text-center p-3"
				placeholder="Email" />
			<input
				aria-label="Password input"
				class="bg-dark-15 rounded-3xl text-center p-3"
				placeholder="Password" />

			<!-- TODO href -->
			<a aria-label="I forgot my password" href="/" class="self-center"
				>I forgot my password</a>
		</div>
		<button
			aria-label="Sign in to Rateaurant"
			class="bg-gradient-to-r from-secondary to-primary p-5
            rounded-b-3xl rounded-br-3xl"
			type="submit">Sign In!</button>
	</form>
</main>
