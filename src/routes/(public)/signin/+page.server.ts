import { dev } from '$app/environment';
import type { ActionData } from '$scripts/action';
import { SESSION_LABEL, WEEK } from '$scripts/cookie';
import { Logger } from '$scripts/logger';
import {
	EMAIL_LABEL,
	HTTPCodes,
	PASSWORD_LABEL,
	request,
	ServerEndPoints,
} from '$scripts/server';
import { type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request: eventReq, cookies }) => {
		Logger.info('Signin: Default');
		let response: ActionData = { success: true, msg: '' };
		let formData = await eventReq.formData();
		(
			await request(ServerEndPoints.UserLogin, null, {
				email: formData.get(EMAIL_LABEL),
				password: formData.get(PASSWORD_LABEL),
			})
		)
			.on(HTTPCodes.BAD_REQUEST, (_) => {
				Logger.info('Signin: BAD_REQUEST');
				response = { success: false, msg: 'Invalid Response' };
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
				Logger.info('Signin: NOT_ACCEPTABLE');
				response = { success: false, msg: 'Email not registered' };
			})
			.on(HTTPCodes.UNAUTHORIZED, (_) => {
				Logger.info('Signin: UNAUTHORIZED');
				response = { success: false, msg: 'Incorrect Password' };
			})
			.on(HTTPCodes.OK, async (res) => {
				Logger.info('Signin: OK');
				const token = res.headers.get('set-cookie');
				if (token == null) {
					Logger.error('Signin: Token failed to receive');
					response = { success: false, msg: 'Session failed to generate' };
					return;
				}
				cookies.set(SESSION_LABEL, token, {
					path: '/',
					sameSite: false,
					secure: !dev,
					maxAge: WEEK,
				});

				response = { success: true, msg: token };
			})
			.catch(() => {
				Logger.error('Signin: Server Communication Faulted');
				response = {
					success: false,
					msg: 'Failed to communicate with the server',
				};
			});
		return response;
	},
} satisfies Actions;
