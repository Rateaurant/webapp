<script lang="ts">
	import logo from '$assets/logo.svg';
	import helpIceCream from '$assets/help-icecream.svg';
	import Restaurant from '$components/Restaurant.svelte';

	import one from '$lib/temp_restaurant/1.jpeg';
	import two from '$lib/temp_restaurant/2.jpeg';

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

<!-- {#if $session != null} -->
{#if false}
	<main
		class="flex flex-col gap-16 m-8 bg-dark-15 p-6 bg-opacity-80"
		aria-label="List of Restaurants">
		<h1 class="text-5xl">Nearby Restaurants</h1>
		{#each restaurants as restaurant}
			<Restaurant {...restaurant} />
		{/each}
	</main>
{:else}
	<div
		aria-label="Branding"
		class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[100%] sm:w-[500px]">
		<img src={logo} alt="Rateaurant Logo" />
	</div>
{/if}

<!-- https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition -->
<img
	aria-label="Gemini Chat Help"
	class="absolute bg-dark-50 rounded-full bottom-0 right-0 mr-5 mb-5
	from-primary to-secondary hover:bg-gradient-to-r hover:cursor-pointer transition-all duration-500"
	src={helpIceCream}
	alt="Chat" />
