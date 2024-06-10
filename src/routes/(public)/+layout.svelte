<script lang="ts">
	import Anchor from '$lib/Anchor.svelte';
	import '../../app.css';
</script>

<body class="bg-dark-25 text-whitetext font-montserrat">
	<div
		aria-label="Navbar"
		class="flex justify-between items-center m-4 ml-8 mr-8">
		<div aria-label="Navigation" class="flex gap-16 text-2xl justify-between">
			<Anchor href="/about" label="About us"
				><div class="hover-underline-animation">About us</div></Anchor>
			<Anchor href="/contact" label="Contact us"
				><div class="hover-underline-animation">Contact us</div></Anchor>
			<Anchor href="/faq" label="Frequently Asked Questions"
				><div class="hover-underline-animation">FAQs</div></Anchor>
		</div>
		<div aria-label="Authentication" class="flex gap-6 text-xl justify-between">
			<Anchor
				class="border p-2 hover:text-dark-25 hover:bg-whitetext
				transition-all duration-200"
				label="Sign In"
				href="/signin">Sign In</Anchor>
			<Anchor
				class="border p-2 hover:text-dark-25 hover:bg-whitetext
				transition-all duration-200"
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
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
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
