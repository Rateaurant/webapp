<script lang="ts">
	import Anchor from './Anchor.svelte';

	export let platform:
		| 'site'
		| 'github'
		| 'tumblr'
		| 'twitter'
		| 'youtube'
		| 'linkedin'
		| 'instagram'
		| undefined = undefined;
	export let link: string | undefined = undefined;
	export let style: 'white' | 'black' = 'white';

	const src = `/social/${platform}/${style}.png`;
</script>

<Anchor href={link} label={platform}>
	<img {src} alt={platform} aria-label={platform} width={32} height={32} />
</Anchor>
