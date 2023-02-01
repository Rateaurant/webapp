<script>
	import Review from '../../../lib/review.svelte';
</script>

<div class="flex flex-col w-[70%] text-white gap-3">
	<Review username="User1" color="green" review="Loved it" star={4.5} />
	<Review username="User2" color="red" review="Hated it" star={3} />
</div>
