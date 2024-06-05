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
				class="bg-dark-15 rounded-3xl text-center p-3"
				placeholder="Email" />
			<input
				class="bg-dark-15 rounded-3xl text-center p-3"
				placeholder="Password" />
			<div class="flex w-full justify-between items-center">
				<label
					for="restaurant-account"
					aria-label="Check for Restaurant Accounts"
					>This is a Restaurant Account</label>
				<input
					id="restaurant-account"
					class="w-5 h-5 accent-secondary ml-5"
					type="checkbox" />
			</div>
		</div>
		<button
			class="bg-gradient-to-r from-secondary to-primary p-5
            rounded-b-3xl rounded-br-3xl"
			type="submit">Sign Up!</button>
	</form>
</main>
