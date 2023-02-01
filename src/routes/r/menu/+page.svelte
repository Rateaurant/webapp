<script>
	import Food from '$lib/food.svelte';
</script>

<div class="flex flex-col w-[70%] text-white gap-3 mb-[2rem]">
	<Food
		name="Burger and Fries"
		description="Food description for some weird chinese food no one knows about or something"
		image="burgernfries.png"
		price={{ new_price: 14.99, offer: true, price: 19.99 }}
	/>
	<Food
		name="Noddles"
		description="It's fucking noddles, you know what it is"
		image="noddles.png"
		price={{ offer: false, price: 19.99 }}
	/>
</div>
