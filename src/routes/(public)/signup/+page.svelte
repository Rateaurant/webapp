<script>
	import logo from '$lib/logo-vertical.svg';

	let stateForAria = false;
</script>

<main class="flex flex-col gap-20 items-center">
	<img aria-label="Branding" src={logo} alt="Rateaurant Logo" width={500} />
	<form
		aria-label="Sign Up form"
		class="flex flex-col bg-dark-20 rounded-3xl text-3xl w-[40%]
        drop-shadow-3xl mb-10">
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
			<div class="flex w-full justify-between items-center">
				<label
					for="restaurant-account"
					aria-label={stateForAria
						? 'Check for Restaurant Accounts'
						: 'Uncheck for Customer Accounts'}
					>This is a Restaurant Account</label>
				<input
					bind:value={stateForAria}
					id="restaurant-account"
					class="w-5 h-5 accent-secondary ml-5"
					type="checkbox" />
			</div>
		</div>
		<button
			aria-label="Sign up to Rateaurant!"
			class="bg-gradient-to-r from-secondary to-primary p-5
            rounded-b-3xl rounded-br-3xl"
			type="submit">Sign Up!</button>
	</form>
</main>
