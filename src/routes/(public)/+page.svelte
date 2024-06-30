<script lang="ts">
	import logo from '$lib/assets/logo.svg';
	import helpIceCream from '$lib/assets/help-icecream.svg';
</script>

<div
	aria-label="Branding"
	class="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
	<img src={logo} alt="Rateaurant Logo" width={500} />
</div>

<!-- https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition -->
<img
	aria-label="Gemini Chat Help"
	class="absolute bg-dark-50 rounded-full bottom-0 right-0 mr-5 mb-5
	from-primary to-secondary hover:bg-gradient-to-r hover:cursor-pointer transition-all duration-500"
	src={helpIceCream}
	alt="Chat" />
