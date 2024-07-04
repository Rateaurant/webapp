<script lang="ts">
	import { goto } from '$app/navigation';
	import Alert from '$components/Alert.svelte';
	import Anchor from '$components/Anchor.svelte';
	import Button from '$components/Button.svelte';
	import Captcha from '$components/Captcha.svelte';
	import { EMAIL_LABEL, PASSWORD_LABEL } from '$scripts/server';
	import { session, email, password } from '$scripts/store';
	import { enhance } from '$app/forms';
	import type { SubmitFunctionFormAction } from '$scripts/action';

	const formData = {
		email: $email,
		password: $password,
	};

	$: {
		email.set(formData.email);
		password.set(formData.password);
	}

	let alert: Alert;
	let captcha: Captcha;
	let submit: Button;

	const formAction: SubmitFunctionFormAction = ({}) => {
		captcha.trigger();
		submit.loadingTrigger();
		return async ({ result }) => {
			submit.resolve();
			if (result.type == 'success') {
				session.set(result.data!.message);
				goto('/');
			} else if (result.type == 'failure') {
				alert.trigger(result.data!.message);
			}
		};
	};
</script>

<Captcha
	bind:this={captcha}
	failure={() => {
		alert.trigger('Captcha Failed');
	}} />

<!-- mb-36 prevents the signup/signin button from getting cut out on hover -->
<form
	aria-label="Sign Up form"
	class="flex flex-col bg-dark-15 rounded-3xl text-lg sm:text-xl mb-36
	drop-shadow-3xl w-1/2 min-w-72 sm:min-w-96 max-w-[35rem]"
	method="post"
	use:enhance={formAction}>
	<div class="flex flex-col gap-3 p-10">
		<h1 class="text-center text-xl sm:text-3xl mb-4">Customer Sign In</h1>
		<label for="email" class="block">
			<span class="text-base">Email</span>
			<input
				bind:value={formData.email}
				name={EMAIL_LABEL}
				aria-label="Email input"
				aria-required="true"
				class="form-input mt-0 block w-full px-0.5 pl-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-dark-15"
				placeholder="johndoe@mail.com" />
		</label>
		<label for="password" class="block">
			<span class="text-base">Password</span>
			<input
				bind:value={formData.password}
				name={PASSWORD_LABEL}
				aria-label="Password input"
				aria-required="true"
				type="password"
				class="form-input mt-0 block w-full px-0.5 pl-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-dark-15" />
		</label>

		<!-- TODO href -->
		<Anchor
			href="/"
			label="Did you forget your password"
			class="text-sm pt-5 text-primary hover:text-secondary duration-200 ease-out"
			>Forgot password</Anchor>
		<Alert bind:this={alert} />
	</div>
	<Button
		bind:this={submit}
		label="Sign in to Rateaurant!"
		class="bg-gradient-to-r from-secondary to-primary p-5
		rounded-b-3xl text-3xl hover:text-4xl transition-all duration-200 ease-out rounded-br-3xl"
		type="submit">Sign In!</Button>
</form>
