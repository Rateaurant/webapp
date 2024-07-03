<script lang="ts">
	import logo from '$assets/logo.svg';
	import helpIceCream from '$assets/help-icecream.svg';
	import Restaurant from '$components/Restaurant.svelte';
	import { session } from '$scripts/store';

	import one from '$lib/temp_restaurant/1.jpeg';
	import two from '$lib/temp_restaurant/2.jpeg';

	let width: number;

	const restaurants = [
		{
			picture: one,
			name: 'ShreeJee',
			phone: '+919876543210',
		},
		{
			picture: two,
			name: 'Mithaas',
			phone: '+910123456789',
		},
		{
			picture: one,
			name: 'Kamal',
			phone: '+919876543210',
		},
		{
			picture: two,
			name: 'B.Tech Chaiwala',
			phone: '+910123456789',
		},
	];
</script>

<svelte:window bind:innerWidth={width} />

{#if $session == undefined}
	<div
		aria-label="Branding"
		class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[100%] sm:w-[500px]">
		<img src={logo} alt="Rateaurant Logo" />
	</div>
{:else}
	<main class="flex flex-col items-center" aria-label="List of Restaurants">
		<img
			class="mt-10 mb-10"
			aria-label="Branding"
			src={logo}
			alt="Rateaurant Logo"
			width={width > 500 / 0.8 ? 500 : width * 0.8} />
		<div class="flex flex-col gap-8 w-[100%] bg-dark-15 p-8">
			<h1 class="text-5xl font-bold text-secondary">Nearby Restaurants</h1>
			<div class="grid grid-cols-2 gap-8">
				{#each restaurants as restaurant}
					<Restaurant {...restaurant} />
				{/each}
			</div>
		</div>
	</main>
{/if}

<!-- https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition -->
<img
	aria-label="Gemini Chat Help"
	class="fixed bg-dark-50 rounded-full bottom-0 right-0 mr-5 mb-5
	from-primary to-secondary hover:bg-gradient-to-r hover:cursor-pointer transition-all duration-500"
	src={helpIceCream}
	alt="Chat" />
