<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<body class="flex flex-col xs:block bg-dark-25 text-whitetext font-montserrat">
	<Navbar loggedIn={data.session != undefined} />
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
