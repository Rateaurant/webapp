<script>
	let restaurant_mode = false;
</script>

<main class="self-center main">
	<div class="flex flex-row gap-2 branding">
		<img src="Logo.svg" alt="" width="50" height="50" />
		<div class="text-4xl">Rateaurant</div>
	</div>
	<form class="modal">
		<input class="cell" placeholder="Email" />
		<input class="cell" placeholder="Password" />
		<div class="restaurant">
			This is a restaurant account<!-- svelte-ignore a11y-click-events-have-key-events -->
			<svg
				width="35"
				height="35"
				viewBox="0 0 53 53"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				class="radio"
				on:click={() => (restaurant_mode = !restaurant_mode)}
			>
				<rect width="35" height="35" rx="26.5" fill={restaurant_mode ? '#0085FF' : '#1D1D1D'} />
			</svg>
		</div>
		<button class="button">Sign Up</button>
	</form>
</main>

<style>
	.main {
		margin-top: 4rem;
	}
	.branding {
		justify-content: center;
		margin-bottom: 1rem;
	}
	.modal {
		margin-bottom: 4rem;
		padding: 3rem;
		width: 50vw;
		background-color: #202020;
		box-shadow: 10px 10px 10px 4px rgba(0, 0, 0, 0.25);
		border-radius: 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.cell {
		width: 80%;
		align-content: center;
		text-align: center;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		border-radius: 1rem;
		background-color: #1d1d1d;
		font-size: 1.2rem;
		opacity: 50%;
		font-weight: light;
	}
	.restaurant {
		display: flex;
		justify-content: space-between;
		gap: 5rem;
	}
	.radio {
		cursor: pointer;
	}
	.button {
		width: 80%;
		align-content: center;
		text-align: center;
		padding-top: 1.5rem;
		padding-bottom: 1.5rem;
		border-radius: 1rem;
		background: linear-gradient(90deg, #0085ff 0%, #ce67ff 100%);
		font-size: 1.2rem;
		font-weight: bolder;
	}
</style>
