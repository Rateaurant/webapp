<script lang="ts">
	import Anchor from '$components/Anchor.svelte';
	import Button from '$components/Button.svelte';
	import Alert from '$components/Alert.svelte';
	import Captcha from '$components/Captcha.svelte';
	import type { ActionData } from '$scripts/action';
	import { onMount } from 'svelte';
	import { EMAIL_LABEL, PASSWORD_LABEL, USERNAME_LABEL } from '$scripts/server';
	import { goto } from '$app/navigation';
	import { email, password, username } from '$scripts/store';

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
	let button: Button;

	onMount(() => {
		captcha.trigger();
		if (!form) {
			return;
		}
		button.enable();
		if (form.success) {
			if (form.msg == 'verify') {
				goto('/verify');
			}
		} else {
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
	method="post">
	<div class="flex flex-col gap-3 p-10">
		<h1 class="text-center text-xl sm:text-3xl mb-4">Customer Sign Up</h1>
		<label for="email" class="block">
			<span class="text-base">Email</span>
			<input
				bind:value={formData.email}
				name={EMAIL_LABEL}
				aria-label="Email input"
				aria-required="true"
				class="form-input mt-0 block w-full px-0.5 pl-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-dark-20"
				placeholder="johndoe@mail.com" />
		</label>
		<label for="username" class="block">
			<span class="text-base">Username</span>
			<input
				bind:value={formData.username}
				name={USERNAME_LABEL}
				aria-label="Username input"
				aria-required="true"
				class="form-input mt-0 block w-full px-0.5 pl-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-dark-20"
				placeholder="John Doe" />
		</label>
		<label for="password" class="block">
			<span class="text-base">Password</span>
			<input
				bind:value={formData.password}
				name={PASSWORD_LABEL}
				aria-label="Password input"
				aria-required="true"
				type="password"
				class="form-input mt-0 block w-full px-0.5 pl-2 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black bg-dark-20" />
		</label>
		<Anchor
			href="/signup/owner"
			label="Go here for making this a Restaurant Account"
			class="text-center">Do you own a restaurant?</Anchor>
		<Alert bind:this={alert} />
	</div>
	<Button
		bind:this={button}
		label="Sign up to Rateaurant!"
		class="bg-gradient-to-r from-secondary to-primary p-5
		rounded-b-3xl text-3xl hover:text-4xl transition-all duration-200 ease-out rounded-br-3xl"
		type="submit">Sign Up!</Button>
</form>
