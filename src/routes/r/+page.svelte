<div class="flex flex-col">
	<div class="flex flex-row w-screen overflow-hidden justify-evenly mt-[-4rem]">
		<div class="bg-[#202020] rounded-3xl p-10">
			<h2 class="text-white text-6xl font-extrabold mb-5">Top Dish</h2>
			<img
				src="burger.png"
				class="rounded-full absolute object-cover"
				width="150"
				height="150"
				alt="Burger"
			/>
			<div class=" ml-[4rem] bg-[#1D1D1D] flex flex-row text-center">
				<div class="text-white font-bold text-3xl pl-[7rem] pr-[7rem] pt-4 pb-4">
					Burger
					<div class="bg-[#A6FF61] text-black font-normal text-2xl mt-4 w-fit p-2">$14.99</div>
				</div>
			</div>
		</div>
		<div class="bg-[#202020] rounded-3xl p-10 text-white">
			<h2 class="text-white text-6xl font-extrabold mb-5">Top Review</h2>
			<div class="bg-[#58b05b] p-5 drop-shadow-2xl">
				<div class="flex flex-row justify-between">
					<div class="text-sm">User12309812</div>
					<div class="flex flex-row">
						{#each ['f', 'f', 'f', 'h', 'e'] as i}
							<img class="drop-shadow-2xl" src="{i}Star.svg" alt={i} />
						{/each}
					</div>
				</div>
				<div class="flex flex-row gap-6">
					<img src="pfp.png" alt="pfp" />
					<div class="text-2xl self-center">Loved it</div>
				</div>
			</div>
		</div>
	</div>

	<nav class="flex flex-row w-screen overflow-hidden justify-evenly mt-[1rem] mb-[2rem]">
		<a
			href="/r/menu"
			class="flex flex-row align-middle gap-5 bg-[#202020] pt-5 pb-5 pl-[5rem] pr-[5rem] rounded-3xl hover:cursor-pointer"
		>
			<img src="menuIcon.svg" width="30" height="30" alt="menu" />
			<div class="text-white text-3xl font-extrabold">Menu</div>
		</a>
		<a
			href="/r/ratings"
			class="flex flex-row align-middle gap-5 bg-[#202020] pt-5 pb-5 pl-[5rem] pr-[5rem] rounded-3xl hover:cursor-pointer"
		>
			<img src="ratingsIcon.svg" width="30" height="30" alt="rating" />
			<div class="text-white text-3xl font-extrabold">Rating</div>
		</a>
	</nav>
</div>
