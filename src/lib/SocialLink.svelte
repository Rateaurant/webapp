<script lang="ts">
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

<a href={link} aria-label={platform}>
	<img {src} alt={platform} aria-label={platform} width={64} height={64} />
</a>
