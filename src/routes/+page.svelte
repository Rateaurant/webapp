<div class="flex flex-col sm:flex-row gap-16 sm:gap-8 justify-evenly">
	<a href="/ratings" class="box grid place-items-center">
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
	</a>
	<a href="/menu" class="box grid place-items-center">
		<div class="flex flex-col z-50">
			<img
				src="/menuIcon.svg"
				alt=""
				class="w-10 self-center buttonIcon transition-all duration-1000"
			/>
			<caption class="text-lg text-white buttonCaption transition-all duration-1000">Menu</caption>
		</div>
		<div class="cover z-30 transition-all duration-1000 rounded-2xl" />
		<img src="/menu.png" alt="" class="buttonIMG absolute rounded-2xl w-[200px]" />
	</a>
</div>

<style lang="postcss">
	.box {
		margin-top: 5rem;
	}
	.box:hover {
		cursor: pointer;
	}
	.box:hover > div > .buttonCaption {
		transform: translateY(1rem);
		scale: 1.5;
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
