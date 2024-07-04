<script lang="ts">
	export let picture: string | undefined;
	export let name: string | undefined;
	export let phone: string | undefined;
	let distance = '15 minutes';
</script>

<div
	class="restaurant group rounded-xl relative w-[800px]"
	aria-label="Restaurant Name: ${name}. Restaurant Contact no: ${phone}">
	<img class="rounded-xl" src={picture} alt={name} width={800} />
	<div class="gard rounded-xl"></div>
	<div class="flex gap-5">
		<div class="absolute bottom-0 mt-auto flex flex-col justify-center p-4">
			<div
				class="group-hover:text-8xl duration-200 ease-out text-2xl text-secondary">
				{name}
			</div>
			<div class="group-hover:text-2xl duration-200 ease-out font-light">
				{phone}
			</div>
			<div class="mt-2 group-hover:text-2xl opacity-50 duration-200 ease-out">
				{distance} away
			</div>
		</div>
	</div>
</div>

<style>
	.gard {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.45) 70%,
			rgba(0, 0, 0, 0.85) 80%,
			rgba(0, 0, 0, 1) 100%
		);
		width: 100%;
		/* It's 102, because a pixel at the bottom is left */
		height: 102%;
		transform: translate(0%, -100%);

		transition: background;
		transition-duration: 200ms;
		transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
	}
	.gard::before {
		background: linear-gradient(
			180deg,
			rgba(0, 0, 0, 0) 0%,
			rgba(0, 0, 0, 0.45) 50%,
			rgba(0, 0, 0, 0.85) 60%,
			rgba(0, 0, 0, 1) 100%
		);
		opacity: 0;
	}
	.gard::before {
		opacity: 1;
	}
</style>
