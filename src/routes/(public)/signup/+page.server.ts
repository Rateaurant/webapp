import {
	request,
	ServerEndPoints,
	HTTPCodes,
	EMAIL_LABEL,
	USERNAME_LABEL,
	PASSWORD_LABEL,
} from '$scripts/server';
import type { ActionData } from '$scripts/action';
import { error, type Actions } from '@sveltejs/kit';
import { Logger } from '$scripts/logger';

export const actions = {
	default: async (event) => {
		Logger.info('Signup: Default');
		let response: ActionData = { success: true, msg: '' };
		let formData = await event.request.formData();
		(
			await request(ServerEndPoints.CustomerSignUp, null, {
				email: formData.get(EMAIL_LABEL),
				username: formData.get(USERNAME_LABEL),
				password: formData.get(PASSWORD_LABEL),
			})
		)
			.on(HTTPCodes.NOT_FOUND, (_) => {
				Logger.warn('Signup: NOT_FOUND');
				throw error(404, 'Not Found');
			})
			.on(HTTPCodes.BAD_REQUEST, (_) => {
				Logger.info('Signup: BAD_REQUEST');
				response = { success: false, msg: 'Invalid Response' };
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
				Logger.info('Signup: NOT_ACCEPTABLE');
				response = { success: false, msg: 'Email already in use' };
			})
			.on(HTTPCodes.CREATED, (_) => {
				Logger.info('Signup: CREATED');
				response = { success: true, msg: 'verify' };
			})
			.catch(() => {
				Logger.error('Verify: Server Communication Faulted');
				response = {
					success: false,
					msg: 'Failed to communicate with the server',
				};
			});
		return response;
	},
} satisfies Actions;
