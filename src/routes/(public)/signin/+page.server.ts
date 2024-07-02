import { dev } from '$app/environment';
import type { ActionData } from '$scripts/action';
import { SESSION_LABEL, WEEK } from '$scripts/cookie';
import { EMAIL_LABEL, HTTPCodes, PASSWORD_LABEL, request, ServerEndPoints } from '$scripts/server';
import { type Actions } from '@sveltejs/kit';

export const actions = {
	default: async ({ request: eventReq, cookies }) => {
		let response: ActionData = { success: true, msg: '' };
		let formData = await eventReq.formData();
		(await request(ServerEndPoints.UserLogin, null, {
			email: formData.get(EMAIL_LABEL),
			password: formData.get(PASSWORD_LABEL)
		}))
			.on(HTTPCodes.BAD_REQUEST, (_) => {
				response = { success: false, msg: 'Invalid Response' };
			})
			.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
				response = { success: false, msg: 'Email not registered' };
			})
			.on(HTTPCodes.UNAUTHORIZED, (_) => {
				response = { success: false, msg: 'Incorrect Password' };
			})
			.on(HTTPCodes.OK, async (res) => {
				const token: string = (await res.json()).token;
				cookies.set(SESSION_LABEL, token, {
					path: '/',
					sameSite: false,
					secure: !dev,
					maxAge: WEEK,
				});
				response = { success: true, msg: token };
			})
			.catch(() => {
				response = { success: false, msg: 'Failed to communicate with the server' };
			});
		return response;
	},
} satisfies Actions;
