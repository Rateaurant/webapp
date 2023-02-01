<script lang="ts">
	import '../../app.css';
</script>

<body class="flex flex-col h-[100vh] bg-[url('/home_glitter.svg')] bg-cover text-white">
	<nav class="flex flex-row justify-evenly mt-9">
		<a href="/about">About Us</a>
		<a href="/partner">Partner</a>
		<a href="/contact">Contact Us</a>
		<a href="/faq">FAQs</a>
	</nav>
	<slot />
</body>
