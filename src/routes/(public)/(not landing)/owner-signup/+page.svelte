<script lang="ts">
	import Alert from '$components/Alert.svelte';
	import Button from '$components/Button.svelte';
	import Captcha from '$components/Captcha.svelte';
	import {
		request,
		ServerEndPoints,
		formDataToBody,
		HTTPCodes,
	} from '$scripts/server';
	import { redirect } from '@sveltejs/kit';

	const formData = {
		email: '',
		username: '',
		password: '',
	};

	let alert: Alert;
	let captcha: Captcha;
</script>

<Captcha
	bind:this={captcha}
	success={async () => {
		(await request(ServerEndPoints.OwnerSignUp, formDataToBody(formData)))
			.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
				alert.trigger('Email Already in use');
			})
			.on(HTTPCodes.CREATED, (_) => {
				redirect(302, '/temp');
			});
	}}
	failure={() => {
		alert.trigger('Captcha Failed');
	}} />
<!-- mb-36 prevents the signup/signin button from getting cut out on hover -->
<form
	aria-label="Sign Up form"
	class="flex flex-col bg-dark-20 rounded-3xl text-lg sm:text-xl mb-36
	drop-shadow-3xl w-1/2 min-w-72 sm:min-w-96 max-w-[35rem]">
	<div class="flex flex-col gap-5 p-10">
		<h1 class="text-center text-xl sm:text-3xl mb-2">Owner Signup</h1>
		<input
			bind:value={formData.email}
			aria-label="Email input"
			aria-required="true"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Email" />
		<input
			bind:value={formData.username}
			aria-label="Username input"
			aria-required="true"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Username" />
		<input
			bind:value={formData.password}
			aria-label="Password input"
			aria-required="true"
			type="password"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Password" />
		<Alert bind:this={alert} />
	</div>
	<Button
		label="Sign up to Rateaurant!"
		class="bg-gradient-to-r from-secondary to-primary p-5
		rounded-b-3xl text-3xl hover:text-4xl transition-all duration-200 ease-out rounded-br-3xl"
		type="submit"
		handler={() => captcha.trigger()}>Sign Up!</Button>
</form>
