<script lang="ts">
	import Anchor from '$lib/Anchor.svelte';
	import Button from '$lib/Button.svelte';
	import { redirect } from '@sveltejs/kit';
	import Alert from '$lib/Alert.svelte';

	const EMAIL_ALREADY_EXISTS = 406;
	const REGISTERED = 201;

	const key = '6LdFVfMpAAAAAMqoza7kjGMlK2khVID5qkD-gsF6';
	const formData = {
		email: '',
		username: '',
		password: '',
	};

	let email_already_exists_alert = false;

	// todo: is there a way to make sveltekit assume grecaptcha
	// this code works, it doesn't crash
	function triggerCaptcha(e: Event) {
		grecaptcha.ready(() => {
			grecaptcha.execute(key, { action: 'submit' }).then(async (t: string) => {
				// captcha success
				console.log(t);
				const response = await fetch(
					`https://api.rateaurant.vercel.app/register/user`,
					{
						method: 'POST',
						body: new URLSearchParams([
							// the first part of the string was first checked with the backend code to make sure they use the same labels
							['username', formData.username],
							['email', formData.email],
							['password', formData.password],
						]),
					},
				);
				if (response.status == EMAIL_ALREADY_EXISTS) {
					email_already_exists_alert = true;
				} else if (response.status == REGISTERED) {
					redirect(302, '/temp');
				}
			});
		});
	}
</script>

<svelte:head>
	<script
		src="https://www.google.com/recaptcha/api.js?render={key}"
		async
		defer></script>
</svelte:head>

<!-- mb-36 prevents the signup/signin button from getting cut out on hover -->
<form
	aria-label="Sign Up form"
	class="flex flex-col bg-dark-20 rounded-3xl text-xl mb-36
	drop-shadow-3xl w-1/4">
	<div class="flex flex-col gap-5 p-10">
		<h1 class="text-center text-3xl mb-2">Customer Signup</h1>
		<input
			bind:value={formData.email}
			aria-label="Email input"
			aria-required="true"
			class="bg-dark-15 rounded-3xl text-center p-3"
			placeholder="Email" />
		<input
			bind:value={formData.username}
			aria-label="Username input"
			aria-required="true"
			class="bg-dark-15 rounded-3xl text-center p-3"
			placeholder="Username" />
		<input
			bind:value={formData.password}
			aria-label="Password input"
			aria-required="true"
			type="password"
			class="bg-dark-15 rounded-3xl text-center p-3"
			placeholder="Password" />
		<Anchor
			href="/owner-signup"
			label="Go here for making this a Restaurant Account"
			class="text-center">Is a Restaurant Account?</Anchor>
		<Alert
			message={'Email already in use'}
			trigger={email_already_exists_alert} />
	</div>
	<Button
		label="Sign up to Rateaurant!"
		class="bg-gradient-to-r from-secondary to-primary p-5
		rounded-b-3xl text-3xl hover:scale-125 transition-all duration-200 ease-out rounded-br-3xl"
		type="submit"
		handler={triggerCaptcha}>Sign Up!</Button>
</form>
