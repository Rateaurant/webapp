<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import Button from '$components/Button.svelte';
	import Alert from '$components/Alert.svelte';
	import Captcha from '$components/Captcha.svelte';
	import type { ActionData } from './$types';
	import { onMount } from 'svelte';

	export let form: ActionData;

	let alert: Alert;
	let captcha: Captcha;

	onMount(() => {
		if (form && !form.success) {
			alert.trigger(form.msg);
		}
	});
</script>

<Captcha
	bind:this={captcha}
	failure={() => {
		alert.trigger('Captcha Failed');
	}} />

<!-- mb-36 prevents the signup/signin button from getting cut out on hover -->
<form
	aria-label="Sign Up form"
	class="flex flex-col bg-dark-20 rounded-3xl text-lg sm:text-xl mb-36
	drop-shadow-3xl w-1/2 min-w-72 sm:min-w-96 max-w-[35rem]"
	method="post"
	on:submit={() => captcha.trigger()}>
	<div class="flex flex-col gap-3 p-10">
		<h1 class="text-center text-xl sm:text-3xl mb-2">Customer Signup</h1>
		<input
			name="email"
			aria-label="Email input"
			aria-required="true"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Email" />
		<input
			name="username"
			aria-label="Username input"
			aria-required="true"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Username" />
		<input
			aria-label="Password input"
			name="password"
			aria-required="true"
			type="password"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Password" />
		<Anchor
			href="/owner-signup"
			label="Go here for making this a Restaurant Account"
			class="text-center">Do you own a restaurant?</Anchor>
		<Alert bind:this={alert} />
	</div>
	<Button
		label="Sign up to Rateaurant!"
		class="bg-gradient-to-r from-secondary to-primary p-5
		rounded-b-3xl text-3xl hover:text-4xl transition-all duration-200 ease-out rounded-br-3xl"
		type="submit">Sign Up!</Button>
</form>
