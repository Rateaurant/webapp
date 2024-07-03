<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import { session } from '$scripts/store';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';

	export let data: PageData;
	onMount(() => {
		session.set(data.session);
	});
</script>

<body class="flex flex-col xs:block bg-dark-25 text-whitetext font-montserrat">
	<Navbar loggedIn={$session != undefined} />
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
