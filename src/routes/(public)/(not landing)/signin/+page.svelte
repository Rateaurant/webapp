<script lang="ts">
	import Alert from '$components/Alert.svelte';
	import Anchor from '$components/Anchor.svelte';
	import Button from '$components/Button.svelte';
	import Captcha from '$components/Captcha.svelte';
	import { request, ServerEndPoints, formDataToBody } from '$scripts/server';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	const formData = {
		email: '',
		username: '',
		password: '',
	};

	let alert: Alert;
	let captcha: Captcha;

	onMount(() => {
		alert.trigger('Test alert');
	});
</script>

<Captcha
	bind:this={captcha}
	success={async () => {
		await request(ServerEndPoints.UserLogin, formDataToBody(formData));
		redirect(302, '/temp');
	}}
	failure={() => {
		alert.trigger('Captcha Failed');
	}} />

<!-- mb-36 prevents the signup/signin button from getting cut out on hover -->
<form
	aria-label="Sign Up form"
	class="flex flex-col bg-dark-20 rounded-3xl text-lg sm:text-xl mb-36
	drop-shadow-3xl w-1/2 min-w-72 sm:min-w-96 max-w-[35rem]">
	<div class="flex flex-col gap-3 p-10">
		<h1 class="text-center text-xl sm:text-3xl mb-2">Customer Signin</h1>
		<input
			bind:value={formData.email}
			aria-label="Email input"
			aria-required="true"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Email" />
		<input
			bind:value={formData.password}
			aria-label="Password input"
			aria-required="true"
			type="password"
			class="bg-dark-15 rounded-xl text-center p-3"
			placeholder="Password" />

		<!-- TODO href -->
		<Anchor href="/" label="Did you forget your password" class="text-center"
			>Forgot password</Anchor>
		<Alert bind:this={alert} />
	</div>
	<Button
		label="Sign in to Rateaurant!"
		class="bg-gradient-to-r from-secondary to-primary p-5
		rounded-b-3xl text-3xl hover:text-4xl transition-all duration-200 ease-out rounded-br-3xl"
		type="submit"
		handler={() => captcha.trigger()}>Sign In!</Button>
</form>
