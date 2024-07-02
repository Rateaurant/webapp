<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import MenuItem from '$components/MenuItem.svelte';
	import Rating from '$components/Rating.svelte';
	import settings from '$assets/settings.svg';

	import burgerImg from '$lib/temp_menu/1.png';
	import noodleImg from '$lib/temp_menu/2.png';

	let restaurantName = 'Restaurant Name';

	type Review = {
		message: string;
		rating: Number;
		author: string;
	};

	function temp(rating: number): Review {
		return {
			message: 'Hello World',
			rating,
			author: 'John Doe',
		};
	}

	let reviews: Review[] = [4, 2, 3, 5, 1].map(temp);

	type MenuItem = {
		name: string;
		normal_price: number;
		is_veg: boolean;
		offer_price?: number;
		img: any;
	};
	let menu: MenuItem[] = [
		{
			name: 'Burgers',
			is_veg: true,
			normal_price: 7,
			offer_price: 5,
			img: burgerImg,
		},
		{
			name: 'Noodles',
			is_veg: true,
			normal_price: 7,
			img: noodleImg,
		},
		{
			name: 'Noodles',
			is_veg: true,
			normal_price: 7,
			img: noodleImg,
		},
		{
			name: 'Burgers',
			is_veg: true,
			normal_price: 7,
			offer_price: 5,
			img: burgerImg,
		},
		{
			name: 'Burgers',
			is_veg: true,
			normal_price: 7,
			img: burgerImg,
		},
		{
			name: 'Noodles',
			is_veg: true,
			normal_price: 7,
			offer_price: 5,
			img: noodleImg,
		},
		{
			name: 'Noodles',
			is_veg: true,
			normal_price: 7,
			offer_price: 5,
			img: noodleImg,
		},
		{
			name: 'Burgers',
			is_veg: true,
			normal_price: 7,
			img: burgerImg,
		},
	];
</script>

<div class="flex flex-col">
	<div aria-label="Restaurant Name" class="text-5xl text-center mt-8 mb-8">
		{restaurantName}
	</div>
	<div aria-label="Restaurant Data" class="flex gap-5 justify-center">
		<div
			aria-label="Reviews"
			class="bg-dark-15 bg-opacity-80 flex flex-col gap-5 p-5 w-96">
			<div class="h-10 text-xl text-center">Recent Reviews</div>
			{#each reviews as { message, author, rating }}
				<div
					aria-label={`${author} gave ${rating} stars`}
					class="bg-dark-25 flex flex-col gap-1 p-3">
					<div class="flex gap-8">
						<div class="opacity-50">{author}</div>
						<Rating {rating} />
					</div>
					<div>{message}</div>
				</div>
			{/each}
		</div>
		<div
			aria-label="Menu"
			class="bg-dark-15 bg-opacity-80 flex flex-col gap-5 p-5 w-[50%]">
			<div class="flex justify-between items-center">
				<div></div>
				<div class="h-10 text-xl text-center content-center">Menu</div>
				<Anchor
					label="Settings"
					href="/restaurant/menu"
					class="bg-dark-25 rounded-sm p-2">
					<img src={settings} alt="Settings Cog" width={15} />
				</Anchor>
			</div>
			<div aria-label="Menu items" class="grid grid-cols-2 gap-5">
				{#each menu as menuItem}
					<MenuItem {...menuItem} />
				{/each}
			</div>
		</div>
	</div>
</div>
