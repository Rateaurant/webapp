<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import { writable } from 'svelte/store';
	import '../app.css';
	import type { PageData } from './$types';
	import { setContext } from 'svelte';
	import { SESSION_LABEL } from '$scripts/cookie';

	export let data: PageData;

	const session = writable(data.session);
	setContext(SESSION_LABEL, session);
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
