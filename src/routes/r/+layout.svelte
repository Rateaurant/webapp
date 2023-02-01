<script>
	import { page } from '$app/stores';
	import '../../app.css';
</script>

<body
	class="flex flex-col align-middle bg-gradient-to-b from-black via-[#000000ca] to-transparent scrollbar-hide"
>
	<img src="/bg.png" alt="" class="fixed h-[100vh] w-[100%] z-[-1] bg-[#A54D41]" />
	<img
		class="absolute top-5 right-0 mr-10"
		src="/Logo.svg"
		alt="Rateaurant"
		width="50"
		height="50"
	/>
	<header class="flex flex-col w-[100%] self-center">
		<a href="/r" class="text-center text-white text-5xl pt-8">Name of the restaurant</a>
		{#if $page.route.id === '/r'}
			<h2 class="text-center text-white p-[2rem] pb-[6rem]">Short Description of the Restaurant</h2>
		{/if}
	</header>
	<div class="flex flex-row w-[100%] justify-evenly mt-[5rem]">
		{#if $page.route.id !== '/r'}
			<nav class="fixed top-44 left-5 flex flex-col gap-5 self-center">
				{#each ['menu', 'ratings'] as item}
					<a href="/r/{item}" class="bg-[#202020] p-7 rounded-md shadow-2xl">
						<img src="/{item}Icon.svg" alt={item} width="45" height="45" />
					</a>
				{/each}
			</nav>
		{/if}
		<slot />
	</div>
</body>
