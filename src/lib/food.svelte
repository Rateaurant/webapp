<script lang="ts">
	type Price =
		| {
				price: number;
				offer: false;
		  }
		| {
				price: number;
				new_price: number;
				offer: true;
		  };

	export let name: string;
	export let description: string;
	export let image: string;
	export let price: Price;
</script>

<div class="hidden line-through bg-[#A6FF61]" />

<div class="p-10 bg-[#0a0605b9] flex flex-row gap-3 justify-between">
	<img src="/{image}" alt="Burger and Fries" width="200" />
	<div class="flex flex-col gap-5">
		<div class="text-3xl font-semibold">{name}</div>
		<div class="text-xl font-thin">
			{description}
		</div>
		<div class="flex flex-row text-black gap-4">
			<div class="pl-4 pr-4 pt-2 pb-2 bg-white {price.offer ? 'line-through' : ''}">
				${price.price}
			</div>
			{#if price.offer}
				<div class="pl-4 pr-4 pt-2 pb-2 bg-[#A6FF61]">${price.new_price}</div>
			{/if}
		</div>
	</div>
	<img class="self-start" src="/Add.svg" alt="Add Item" width="100" height="100" />
</div>
