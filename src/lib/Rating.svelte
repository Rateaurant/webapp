<script lang="ts">
	export let rating: Number;

	let fill: string = '#';
	switch (rating) {
		case 1:
			fill += '5B1904';
			break;
		case 2:
			fill += '5B2E04';
			break;
		case 3:
			fill += '4F5B04';
			break;
		case 4:
			fill += '355B04';
			break;
		case 5:
			fill += '0B5B04';
			break;

		default:
			fill += '000000';
			break;
	}
</script>

<div class="flex">
	{#each Array(rating) as _}
		<svg
			width="16"
			height="15"
			viewBox="0 0 16 15"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				d="M8 0L9.79611 5.52786H15.6085L10.9062 8.94427L12.7023 14.4721L8 11.0557L3.29772 14.4721L5.09383 8.94427L0.391548 5.52786H6.20389L8 0Z"
				{fill} />
		</svg>
	{/each}
</div>
