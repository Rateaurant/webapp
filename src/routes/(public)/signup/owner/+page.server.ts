import {
	request,
	ServerEndPoints,
	HTTPCodes,
	EMAIL_LABEL,
	PASSWORD_LABEL,
	USERNAME_LABEL,
} from '$scripts/server';
import { error, fail, redirect, type Actions } from '@sveltejs/kit';
import { Logger } from '$scripts/logger';

export const actions = {
	default: async (event) => {
		Logger.info('Signup Owner: Load');
		let formData = await event.request.formData();
		return await (
			await request(ServerEndPoints.OwnerSignUp, null, {
				email: formData.get(EMAIL_LABEL),
				username: formData.get(USERNAME_LABEL),
				password: formData.get(PASSWORD_LABEL),
			})
		)
			.on(HTTPCodes.NOT_FOUND, () => {
				Logger.warn('Signup Owner: NOT_FOUND');
				throw error(404, 'Not Found');
			})
			.on(HTTPCodes.BAD_REQUEST, () => {
				Logger.info('Signup Owner: BAD_REQUEST');
				return fail(
					HTTPCodes.BAD_REQUEST,
					{ message: 'Invalid Response' }
				);
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, () => {
				Logger.info('Signup Owner: NOT_ACCEPTABLE');
				return fail(
					HTTPCodes.NOT_ACCEPTABLE,
					{ message: 'Email already in use' }
				);
			})
			.on(HTTPCodes.CREATED, () => {
				Logger.info('Signup Owner: CREATED');
				throw redirect(303, '/verify');
			})
			.catch(() => {
				Logger.error('Signup Owner: Server Communication Faulted');
				return fail(
					HTTPCodes.SERVICE_UNAVAILABLE,
					{ message: 'Failed to communicate with the server' }
				);
			})
			.getResult();
	},
} satisfies Actions;
