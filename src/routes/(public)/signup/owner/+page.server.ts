import {
	request,
	ServerEndPoints,
	HTTPCodes,
	EMAIL_LABEL,
	PASSWORD_LABEL,
	USERNAME_LABEL,
} from '$scripts/server';
import type { ActionData } from '$scripts/action';
import { error, type Actions } from '@sveltejs/kit';
import { Logger } from '$scripts/logger';

export const actions = {
	default: async (event) => {
		Logger.info('Signup Owner: Load');
		let response: ActionData = { success: true, msg: '' };
		let formData = await event.request.formData();
		(
			await request(ServerEndPoints.OwnerSignUp, null, {
				email: formData.get(EMAIL_LABEL),
				username: formData.get(USERNAME_LABEL),
				password: formData.get(PASSWORD_LABEL),
			})
		)
			.on(HTTPCodes.NOT_FOUND, (_) => {
				Logger.warn('Signup Owner: NOT_FOUND');
				throw error(404, 'Not Found');
			})
			.on(HTTPCodes.BAD_REQUEST, (_) => {
				Logger.info('Signup Owner: BAD_REQUEST');
				response = { success: false, msg: 'Invalid Response' };
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
				Logger.info('Signup Owner: NOT_ACCEPTABLE');
				response = { success: false, msg: 'Email already in use' };
			})
			.on(HTTPCodes.CREATED, (_) => {
				Logger.info('Signup Owner: CREATED');
				response = { success: true, msg: 'verify' };
			})
			.catch(() => {
				Logger.error('Signup Owner: Server Communication Faulted');
				response = {
					success: false,
					msg: 'Failed to communicate with the server',
				};
			});
		return response;
	},
} satisfies Actions;
