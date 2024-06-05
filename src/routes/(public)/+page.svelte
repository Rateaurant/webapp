<script>
	import logo from '$lib/logo.svg';
	import helpIceCream from '$lib/help-icecream.svg';
</script>

<div
	aria-label="Branding"
	class="w-screen mt-72 flex flex-col items-center justify-center">
	<img src={logo} alt="Rateaurant Logo" width={500} />
</div>

<!-- https://stackoverflow.com/questions/67150736/tailwind-background-gradient-transition -->
<div
	id="chat"
	aria-label="Gemini Chat Help"
	class="absolute bg-dark-50 rounded-full bottom-0 right-0 mr-5 mb-5
	from-primary to-secondary hover:bg-gradient-to-r hover:cursor-pointer transition-all duration-500">
	<img src={helpIceCream} alt="Chat" />
</div>
