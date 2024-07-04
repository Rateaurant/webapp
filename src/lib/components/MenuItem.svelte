<script lang="ts">
	export let name: string;
	export let normal_price: number;
	export let is_veg: boolean;
	export let offer_price: number | null = null;
	export let img: any;
</script>

<div
	aria-label="${name} for $${offer_price ? offer_price : normal_price}"
	class="bg-dark-25 rounded-md flex gap-5 items-center">
	<div>
		{#if is_veg}
			<div class="absolute bg-green text-center w-16 rounded-tl-md">Veg</div>
		{:else}
			<div class="absolute bg-primary text-center w-16 rounded-tl-md">
				Non Veg
			</div>
		{/if}
		<div></div>
		<img
			src={img}
			alt="${name} for $${offer_price ? offer_price : normal_price}" />
	</div>
	<div class="text-2xl flex flex-col gap-2">
		{name}
		<div class="flex gap-2">
			<div class="bg-dark-20 p-1 ${offer_price ? 'line-through' : ''}">
				${normal_price}
			</div>
			{#if offer_price}
				<div class="bg-green p-1">${offer_price}</div>
			{/if}
		</div>
	</div>
</div>
