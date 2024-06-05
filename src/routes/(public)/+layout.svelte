<script>
	import '../../app.css';
</script>

<body class="bg-dark-25 text-whitetext font-montserrat">
	<div aria-label="Navigation" class="flex justify-evenly text-4xl m-16">
		<a href="/about" aria-label="About us">About us</a>
		<a href="/contact" aria-label="Contact us">Contact us</a>
		<a href="/faq" aria-label="Frequently asked questions">FAQs</a>
	</div>
	<slot />
</body>

<style>
	body {
		overflow: hidden;
		background-image: url('/background.svg');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
	}
</style>
