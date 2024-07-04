<script lang="ts">
	import logo from '$assets/logo.svg';
	import helpIceCream from '$assets/help-icecream.svg';
	import Restaurant from '$components/Restaurant.svelte';
	import { email, session } from '$scripts/store';

	import one from '$lib/temp_restaurant/1.jpeg';
	import two from '$lib/temp_restaurant/2.jpeg';
	import Button from '$components/Button.svelte';
	import Anchor from '$components/Anchor.svelte';
	import { onMount } from 'svelte';

	const infoOwner = {
		title: 'Manage',
		description: 'your restaurants',
	};
	const infoCustomer = {
		title: 'Enjoy',
		description: 'local restaurants',
	};
	let info = infoOwner;
	let infoInterval: any;

	const interval = () => {
		if (info.title == 'Enjoy') {
			info = infoOwner;
		} else {
			info = infoCustomer;
		}
	};

	$: {
		clearInterval(infoInterval);
		infoInterval = setInterval(interval, 5000);
	}

	let width: number;

	let FD_email = $email;
	$: email.set(FD_email);

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
		class="absolute p-4 text-center transform -translate-y-full top-1/2 left-1/2 w-[100%] sm:w-[500px]">
		<img src={logo} alt="Rateaurant Logo" />
	</div>
	<div class="absolute bottom-0 left-0 translate-x-1/4 -translate-y-3/4">
		<div class="text-5xl lg:text-8xl text-secondary font-extrabold h-28">
			{info.title}
		</div>
		<div class="text-xl lg:text-3xl font-bold h-14">{info.description}</div>
		<div class="text-base lg:text-xl h-14">
			Enhance the food ordering and restaurant management experience
		</div>
		<div class="flex mt-5">
			<input
				class="border bg-dark-20 p-4 text-xl"
				bind:value={FD_email}
				type="text" />
			<Anchor
				force_reload
				preload_on="tap"
				label="Sign up for Rateaurant today!"
				href="/signup?email={FD_email}">
				<Button
					><div
						class="border bg-dark-15 p-4 flex gap-2 text-2xl hover:bg-whitetext hover:text-dark-15 transition-all duration-200 content-center">
						Get Started with <div class="text-secondary">Rateaurant</div>
					</div></Button>
			</Anchor>
		</div>
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

<style>
	:global(.body) {
		background-image: url('/background-landing.svg');
	}
</style>
