<script lang="ts">
	import '../../app.css';
</script>

<body class="bg-dark-25 text-whitetext font-montserrat">
	<div aria-label="Header" class="flex justify-between items-center m-16">
		<div aria-label="Navigation" class="flex gap-20 text-4xl justify-between">
			<a href="/about" aria-label="About us">About us</a>
			<a href="/contact" aria-label="Contact us">Contact us</a>
			<a href="/faq" aria-label="Frequently asked questions">FAQs</a>
		</div>
		<div
			aria-label="Authentication"
			class="flex gap-12 text-3xl justify-between">
			<a
				class="border p-4 hover:text-dark-25 hover:bg-whitetext
				transition-all duration-200"
				href="/signin">Sign In</a>
			<a
				class="border p-4 hover:text-dark-25 hover:bg-whitetext
				transition-all duration-200"
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
</style>
