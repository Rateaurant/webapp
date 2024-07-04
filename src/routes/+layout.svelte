<script lang="ts">
	import Navbar from '$components/Navbar.svelte';
	import { session } from '$scripts/store';
	import { onMount } from 'svelte';
	import '../app.css';
	import type { PageData } from './$types';
	import { page } from '$app/stores';

	export let data: PageData;
	let loggedIn = false;
	const path = $page.url.pathname.substr($page.url.pathname.lastIndexOf('/'));
	let backgroundImage: string = '/background.svg';
	onMount(() => {
		if (path == '/') {
			backgroundImage = '/background-landing.svg';
		} else {
			backgroundImage = '/background.svg';
		}
		session.set(data.session);
	});
	session.subscribe((new_session) => {
		loggedIn = new_session != undefined;
	});
</script>

<div
	class="body flex flex-col xs:block bg-dark-25 text-whitetext font-montserrat">
	<Navbar {loggedIn} />
	<slot />
</div>

<style>
	.body {
		width: 100vw;
		height: 100vh;
		overflow-x: hidden;
		background-repeat: repeat;
		background-attachment: fixed;
		background-size: cover;
	}
</style>
