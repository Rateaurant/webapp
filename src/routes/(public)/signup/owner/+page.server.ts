import {
	request,
	ServerEndPoints,
	HTTPCodes,
	EMAIL_LABEL,
	PASSWORD_LABEL,
	USERNAME_LABEL,
} from '$scripts/server';
import type { ActionData } from '$scripts/action';
import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		let response: ActionData = { success: true, msg: '' };
		let formData = await event.request.formData();
		(await request(ServerEndPoints.OwnerSignUp, null, {
			email: formData.get(EMAIL_LABEL),
			username: formData.get(USERNAME_LABEL),
			password: formData.get(PASSWORD_LABEL)
		}))
			.on(HTTPCodes.NOT_FOUND, (_) => {
				throw error(404, 'Not Found');
			})
			.on(HTTPCodes.BAD_REQUEST, (_) => {
				response = { success: false, msg: 'Invalid Response' };
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
				response = { success: false, msg: 'Email already in use' };
			})
			.on(HTTPCodes.CREATED, (_) => {
				redirect(303, '/verify');
			})
			.catch(() => {
				response = { success: false, msg: 'Failed to communicate with the server' };
			});
		return response;
	},
} satisfies Actions;
