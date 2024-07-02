<script lang="ts">
	export let picture: string | undefined;
	export let name: string | undefined;
	export let phone: string | undefined;
	let distance = '15 minutes';
</script>

<div
	class="flex bg-dark-25 p-4 w-[40%] gap-5"
	aria-label={`Restaurant Name: ${name}. Restaurant Contact no: ${phone}`}>
	<img class="rounded-xl" src={picture} alt={name} width={200} />
	<div class="flex flex-col justify-center">
		<div class="text-3xl">{name}</div>
		<div>{phone}</div>
	</div>
</div>
