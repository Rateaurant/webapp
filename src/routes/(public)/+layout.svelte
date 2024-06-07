<script lang="ts">
	import '../../app.css';
</script>

<body class="bg-dark-25 text-whitetext font-montserrat">
	<div
		aria-label="Navbar"
		class="flex justify-between items-center m-4 ml-8 mr-8">
		<div aria-label="Navigation" class="flex gap-16 text-2xl justify-between">
			<a class="hover-underline-animation" href="/about" aria-label="About us"
				>About us</a>
			<a
				class="hover-underline-animation"
				href="/contact"
				aria-label="Contact us">Contact us</a>
			<a
				class="hover-underline-animation"
				href="/faq"
				aria-label="Frequently Asked Questions">FAQs</a>
		</div>
		<div
			aria-label="Authentication"
			class="flex gap-12 text-xl justify-between">
			<a
				class="border p-2 hover:text-dark-25 hover:bg-whitetext
				transition-all duration-200"
				aria-label="Sign In"
				href="/signin">Sign In</a>
			<a
				class="border p-2 hover:text-dark-25 hover:bg-whitetext
				transition-all duration-200"
				aria-label="Sign Up"
				href="/signup">Sign Up</a>
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
		background-color: #ffffea;
		transform-origin: bottom right;
		transition: transform 0.2s ease-out;
	}

	.hover-underline-animation:hover::after {
		transform: scaleX(1);
		transform-origin: bottom left;
	}
</style>
