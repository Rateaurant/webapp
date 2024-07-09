<script>
	import '../app.css';
	import logo from '$assets/logo.svg';
</script>

<nav
	class="flex flex-row items-center justify-between p-4 pl-8 pr-8 text-3xl border-b-2 border-black">
	<a href="/" aria-label="Branding" class="flex items-center gap-3">
		<img src={logo} width={48} alt="Rateaurant Logo" />
		<div>Rateaurant</div>
	</a>
	<div aria-label="Resources" class="flex gap-10">
		<a href="/about">About Us</a>
		<a href="/contact">Contact</a>
		<a href="/faq">FAQs</a>
	</div>
</nav>

<slot />

<style>
	:root {
		overflow: hidden;
	}
	:global(main) {
		background-image: url('/background.svg');
		height: 100vh;
	}
</style>
