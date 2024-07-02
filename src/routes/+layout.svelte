<script lang="ts">
	import Button from '$components/Button.svelte';
	import Navbar from '$components/Navbar.svelte';
	import '../app.css';
</script>

<body class="flex flex-col xs:block bg-dark-25 text-whitetext font-montserrat">
	<!-- <Button
		handler={() => session.set($session == null ? 'temp' : null)}
		class="absolute">Toggle Auth State</Button> -->
	<!-- <Navbar loggedIn={$session != null} /> -->
	<Navbar loggedIn={false} />
	<slot />
</body>

<style>
	body {
		overflow-x: hidden;
		background-image: url('/background.svg');
		background-repeat: repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
