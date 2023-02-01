<script lang="ts">
	type Stars = 'f' | 'h' | 'e';
	type Color = 'red' | 'green';

	export let username: string;
	export let review: string;
	export let star: number;
	export let color: Color;

	let stars: Stars[] = ['e', 'e', 'e', 'e', 'e'];
	let i = 0;
	for (; i < Math.round(star - 0.1); i++) {
		stars[i] = 'f';
	}
	if (Math.round(star) !== star) {
		stars[i] = 'h';
	}
</script>

<!-- Loading the dynamic style -->
<div
	class="hidden
    from-[#79F67E]
    to-[#79f67d00]"
/>
<div
	class="hidden
    from-[#F67979]
    to-[#f6797900]"
/>

<div
	class="bg-gradient-to-b p-10
    from-[#{color === 'green' ? '79F67E' : 'F67979'}]
    to-[#{color === 'green' ? '79F67E00' : 'F6797900'}]"
>
	<div class="flex flex-row justify-between">
		<div class="text-sm">{username}</div>
		<div class="flex flex-row">
			{#each stars as i}
				<img class="drop-shadow-2xl" src="/{i}Star.svg" alt={i} />
			{/each}
		</div>
	</div>
	<div class="flex flex-row gap-6">
		<img src="/pfp.png" alt="pfp" />
		<div class="text-2xl self-center">{review}</div>
	</div>
</div>
