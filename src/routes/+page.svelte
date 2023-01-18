<script>
	import '../app.css';
</script>

<img src="/bg.png" alt="" class="absolute h-[100vh] w-[100%] z-[-1]" />
<main class="text-center text-white text-5xl p-8">Name of the restaurant</main>
<div class="flex flex-row justify-center">
	<h2 class="text-center text-white text-3xl p-4">powered by</h2>
	<img src="/brandingLogo.png" alt="" class="w-7 h-7 self-center" />
	<h2 class="text-center text-white text-3xl p-4">Rateaurant</h2>
</div>
<h2 class="text-center text-white p-[4rem]">Short Description of the Restaurant</h2>

<div class="flex flex-col sm:flex-row gap-16 sm:gap-8 justify-evenly">
	<div class="box grid place-items-center">
		<div class="flex flex-col z-50">
			<img
				src="/ratingIcon.svg"
				alt=""
				class="w-10 self-center buttonIcon transition-all duration-1000"
			/>
			<caption class="text-lg text-white buttonCaption transition-all duration-1000">Rating</caption
			>
		</div>
		<div class="cover z-30 transition-all duration-1000 rounded-2xl" />
		<img src="/rating.png" alt="" class="buttonIMG absolute rounded-2xl w-[200px]" />
	</div>
	<div class="box grid place-items-center">
		<div class="flex flex-col z-50">
			<img
				src="/menuIcon.svg"
				alt=""
				class="w-10 self-center buttonIcon transition-all duration-1000"
			/>
			<caption class="text-lg text-white buttonCaption transition-all duration-1000">Rating</caption
			>
		</div>
		<div class="cover z-30 transition-all duration-1000 rounded-2xl" />
		<img src="/menu.png" alt="" class="buttonIMG absolute rounded-2xl w-[200px]" />
	</div>
</div>

<style lang="postcss">
	.box {
		margin-top: 5rem;
	}
	.box:hover > div > .buttonCaption {
	}
	.box:hover > div > .buttonIcon {
		transform: rotate(360deg);
		scale: 1.5;
	}
	.cover {
		position: absolute;
		padding: 100px;
		background-color: rgba(0, 0, 0, 0.5);
	}
	.box:hover > .cover {
		background-color: rgba(0, 0, 0, 0.7);
	}
</style>
