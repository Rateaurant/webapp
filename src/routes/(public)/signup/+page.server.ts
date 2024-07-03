import {
	request,
	ServerEndPoints,
	HTTPCodes,
	EMAIL_LABEL,
	USERNAME_LABEL,
	PASSWORD_LABEL,
} from '$scripts/server';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { Logger } from '$scripts/logger';

export const actions = {
	default: async (event) => {
		Logger.info('Signup: Default');
		let formData = await event.request.formData();
		return await (
			await request(ServerEndPoints.CustomerSignUp, null, {
				email: formData.get(EMAIL_LABEL),
				username: formData.get(USERNAME_LABEL),
				password: formData.get(PASSWORD_LABEL),
			})
		)
			.on(HTTPCodes.NOT_FOUND, () => {
				Logger.warn('Signup: NOT_FOUND');
				throw error(404, 'Not Found');
			})
			.on(HTTPCodes.BAD_REQUEST, () => {
				Logger.info('Signup: BAD_REQUEST');
				return fail(
					HTTPCodes.BAD_REQUEST,
					{ message: 'Invalid Response' }
				);
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, () => {
				Logger.info('Signup: NOT_ACCEPTABLE');
				return fail(
					HTTPCodes.NOT_ACCEPTABLE,
					{ message: 'Email already in use' }
				);
			})
			.on(HTTPCodes.CREATED, () => {
				Logger.info('Signup: CREATED');
				throw redirect(303, '/verify');
			})
			.catch(() => {
				Logger.error('Verify: Server Communication Faulted');
				return fail(
					HTTPCodes.SERVICE_UNAVAILABLE,
					{ message: 'Failed to communicate with the server' }
				);
			})
			.getResult();
	},
} satisfies Actions;
