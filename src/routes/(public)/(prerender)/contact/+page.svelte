<script lang="ts">
	import SocialLink from '$components/SocialLink.svelte';

	let data: {
		name: string;
		links: {
			site?: string;
			github?: string;
			tumblr?: string;
			twitter?: string;
			youtube?: string;
			linkedin?: string;
			instagram?: string;
		};
	}[] = [
		{
			name: 'Aargh Rai',
			links: {
				site: 'https://aargh.is-a.dev/',
				github: 'https://github.com/FloatingComet62/',
				tumblr: 'https://floatingcomet62.tumblr.com/',
				twitter: 'https://x.com/floatingcomet62',
				youtube: 'https://www.youtube.com/@FloatingComet62',
				linkedin: 'https://www.linkedin.com/in/aargh-rai-40900524a/',
			},
		},
		{
			name: 'Natya Vidhan Biswas',
			links: {
				site: 'https://natya.is-a.dev/',
				github: 'https://github.com/natyavidhan',
				linkedin: 'https://linkedin.com/in/natyavidhan',
				instagram: 'https://instagram.com/natyavidhan',
			},
		},
		{
			name: 'Rama Krishna',
			links: {
				site: 'https://ramakrishna-psvs.github.io/',
				github: 'https://github.com/ramakrishna-psvs',
				linkedin: 'https://www.linkedin.com/in/rama-krishna-pinjala-106103212/',
				instagram: 'https://www.instagram.com/rama.krishna__/',
			},
		},
	];
	// https://stackoverflow.com/questions/5338685/how-can-i-replicate-pythons-dict-items-in-javascript
	function items(obj: Object) {
		var ret = [];
		for (const v in obj) {
			ret.push(Object.freeze([v, (obj as any)[v]]));
		}
		return Object.freeze(ret);
	}
</script>

<div
	class="text-5xl md:text-8xl text-center font-extrabold text-secondary"
	aria-label="Founders">
	Founders
</div>
<div
	class="flex flex-col gap-8 md:gap-0 mb-10 md:flex-row justify-evenly w-screen"
	aria-label="List of founders and their socials">
	{#each data as item}
		<div
			class="flex flex-col items-center gap-3 md:gap-8"
			aria-label="Founder Data">
			<div class="text-3xl text-center" aria-label="Founder - ${item.name}">
				{item.name}
			</div>
			<div class="socials flex gap-5 items-center flex-wrap justify-center">
				{#each items(item.links) as social}
					<SocialLink platform={social[0]} link={social[1]} style="white" />
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.socials {
		--socialsPerRow: 3;
		--widthOfSocial: 32px;
		--gap: 1.25rem;
		width: calc(
			var(--widthOfSocial) * var(--socialsPerRow) + var(--gap) *
				(var(--socialsPerRow) - 1)
		);
	}
</style>
