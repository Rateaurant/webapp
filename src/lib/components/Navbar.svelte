<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import Button from '$components/Button.svelte';
	import menu from '$assets/menu.svg';
	export let loggedIn: boolean | undefined;

	let width: number;
	let is_xs: boolean;
	let showNavModal: boolean = false;

	let turnOffModal = () => {
		showNavModal = false;
	};
	$: is_xs = width < 420;
</script>

<svelte:window bind:innerWidth={width} />

<div
	aria-label="Navbar"
	class="flex justify-between self-center items-center m-4 ml-0 xs:ml-8 mr-0 xs:mr-8 w-[90%] xs:w-auto">
	{#if is_xs}
		<Button handler={() => (showNavModal = !showNavModal)}>
			<img src={menu} alt="Open Navigation Items" />
		</Button>
		{#if showNavModal}
			<div
				class="absolute flex flex-col bg-dark-20 p-4 rounded-xl translate-x-10 translate-y-10"
				aria-label="Navgation Modal">
				<Anchor
					handler={turnOffModal}
					href="/about"
					label="About us"
					class="content-center"
					><div class="hover-underline-animation">About us</div></Anchor>
				<Anchor
					handler={turnOffModal}
					href="/contact"
					label="Contact us"
					class="content-center"
					><div class="hover-underline-animation">Contact us</div></Anchor>
				<Anchor
					handler={turnOffModal}
					href="/faq"
					label="Frequently Asked Questions"
					class="content-center"
					><div class="hover-underline-animation">FAQs</div></Anchor>
			</div>
		{/if}
	{:else}
		<div
			aria-label="Navigation"
			class="flex gap-2 xs:gap-5 sm:gap-16 text-sm sm:text-lg md:text-2xl justify-between text-center">
			<Anchor href="/about" label="About us" class="content-center"
				><div class="hover-underline-animation">About us</div></Anchor>
			<Anchor href="/contact" label="Contact us" class="content-center"
				><div class="hover-underline-animation">Contact us</div></Anchor>
			<Anchor
				href="/faq"
				label="Frequently Asked Questions"
				class="content-center"
				><div class="hover-underline-animation">FAQs</div></Anchor>
		</div>
	{/if}
	<div
		aria-label="Authentication"
		class="flex gap-2 xs:gap-3 sm:gap-6 text-xs sm:text-base md:text-xl justify-between text-center">
		{#if loggedIn}
			<Anchor
				class="border p-1 sm:p-2 hover:text-dark-25 hover:bg-whitetext
				transition-all duration-200 content-center"
				label="Sign Out"
				href="/signout">Sign Out</Anchor>
		{:else}
			<Anchor
				class="border p-1 sm:p-2 hover:text-dark-25 hover:bg-whitetext
                transition-all duration-200 content-center"
				label="Sign In"
				href="/signin">Sign In</Anchor>
			<Anchor
				class="border p-1 sm:p-2 hover:text-dark-25 hover:bg-whitetext
                transition-all duration-200 content-center"
				label="Sign Up"
				href="/signup">Sign Up</Anchor>
		{/if}
	</div>
</div>

<style>
	/* https://www.30secondsofcode.org/css/s/hover-underline-animation/ */
	.hover-underline-animation {
		display: inline-block;
		position: relative;
	}

	.hover-underline-animation::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: theme('colors.whitetext');
		transform-origin: bottom right;
		transition: transform 0.2s ease-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
