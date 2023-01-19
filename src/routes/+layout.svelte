<script>
	import { page } from '$app/stores';
	import '../app.css';
</script>

<body class="flex flex-col align-middle bg-gradient-to-b from-black via-[#000000ca] to-transparent">
	<img src="/bg.png" alt="" class="absolute h-[100vh] w-[100%] z-[-1]" />
	<header class="flex flex-col w-fit self-center">
		<main class="text-center text-white text-5xl pt-8">Name of the restaurant</main>
		<div class="flex flex-row justify-center w-fit self-end">
			<h2 class="text-center text-white font-extrabold text-3xl p-1">powered by</h2>
			<img src="/brandingLogo.png" alt="" class="w-7 h-7 self-center" />
			<h2 class="text-center text-white font-extrabold text-3xl p-1">Rateaurant</h2>
		</div>
		{#if $page.route.id == '/'}
			<h2 class="text-center text-white p-[4rem]">Short Description of the Restaurant</h2>
		{/if}
	</header>
	<slot />
</body>
