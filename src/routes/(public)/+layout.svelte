<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import '../../app.css';
</script>

<body class="flex flex-col xs:block bg-dark-25 text-whitetext font-montserrat">
	<div
		aria-label="Navbar"
		class="flex justify-between self-center items-center m-4 ml-0 xs:ml-8 mr-0 xs:mr-8 w-[90%] xs:w-auto">
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
		<div
			aria-label="Authentication"
			class="flex gap-2 xs:gap-3 sm:gap-6 text-xs sm:text-base md:text-xl justify-between text-center">
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
		</div>
	</div>
	<slot />
</body>

<style>
	body {
		overflow-x: hidden;
		background-image: url('/background.svg');
		background-repeat: repeat;
		background-attachment: fixed;
		background-size: cover;
	}
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
