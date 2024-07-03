import { dev } from '$app/environment';
import { SESSION_LABEL, WEEK } from '$scripts/cookie';
import { Logger } from '$scripts/logger';
import {
	EMAIL_LABEL,
	HTTPCodes,
	PASSWORD_LABEL,
	request,
	ServerEndPoints,
} from '$scripts/server';
import { fail, type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request: eventReq, cookies }) => {
		Logger.info('Signin: Default');
		let formData = await eventReq.formData();
		return await (
			await request(ServerEndPoints.UserLogin, null, {
				email: formData.get(EMAIL_LABEL),
				password: formData.get(PASSWORD_LABEL),
			})
		)
			.on(HTTPCodes.BAD_REQUEST, () => {
				Logger.info('Signin: BAD_REQUEST');
				return fail(HTTPCodes.BAD_REQUEST, { message: 'Invalid Response' });
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, () => {
				Logger.info('Signin: NOT_ACCEPTABLE');
				return fail(HTTPCodes.NOT_ACCEPTABLE, { message: 'Email not registered' });
			})
			.on(HTTPCodes.UNAUTHORIZED, () => {
				Logger.info('Signin: UNAUTHORIZED');
				return fail(HTTPCodes.UNAUTHORIZED, { message: 'Incorrect Password' });
			})
			.on(HTTPCodes.OK, ({ headers }) => {
				Logger.info('Signin: OK');
				const token = headers.get('set-cookie');
				if (token == null) {
					Logger.error('Signin: Token failed to receive');
					return fail(HTTPCodes.INTERNAL_SERVER_ERROR, { message: 'Session failed to generate' });
				}
				cookies.set(SESSION_LABEL, token, {
					path: '/',
					sameSite: false,
					secure: !dev,
					maxAge: WEEK,
				});

				return { message: token };
			})
			.catch(() => {
				Logger.error('Signin: Server Communication Faulted');
				return fail(HTTPCodes.SERVICE_UNAVAILABLE, { message: 'Failed to communicate with the server' });
			})
			.getResult();
	},
} satisfies Actions;
