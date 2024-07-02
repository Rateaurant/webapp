<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import Button from '$components/Button.svelte';
	import Alert from '$components/Alert.svelte';
	import Captcha from '$components/Captcha.svelte';
	import type { ActionData } from '$scripts/action';
	import { getContext, onMount } from 'svelte';
	import { EMAIL_LABEL, PASSWORD_LABEL, USERNAME_LABEL } from '$scripts/server';
	import type { Writable } from 'svelte/store';

	const email = getContext<Writable<string>>(EMAIL_LABEL);
	const username = getContext<Writable<string>>(USERNAME_LABEL);
	const password = getContext<Writable<string>>(PASSWORD_LABEL);
	const formData = {
		email: $email,
		username: $username,
		password: $password,
	};

	$: {
		email.set(formData.email);
		username.set(formData.username);
		password.set(formData.password);
	}

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
			bind:value={formData.email}
			name={EMAIL_LABEL}
			aria-label="Email input"
			aria-required="true"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Email" />
		<input
			bind:value={formData.username}
			name={USERNAME_LABEL}
			aria-label="Username input"
			aria-required="true"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Username" />
		<input
			bind:value={formData.password}
			aria-label="Password input"
			name={PASSWORD_LABEL}
			aria-required="true"
			type="password"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Password" />
		<Anchor
			href="/signup/owner"
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
