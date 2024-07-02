import type { PageServerLoad } from './$types';
import { HTTPCodes, ServerEndPoints, request } from '$scripts/server';
import type { ActionData } from '$scripts/action';
import { dev } from '$app/environment';
import { SESSION_LABEL, WEEK } from '$scripts/cookie';

export const load: PageServerLoad = async ({ url, cookies }) => {
	let response: ActionData = { success: true, msg: '' };
	const token = url.searchParams.get('code');
	if (token == null) {
		return response;
	}
	(await request(ServerEndPoints.VerifyLogin, null, { code: token }))
		.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
			response!.success = false;
			response!.msg = 'Invalid Code';
		})
		.catch(() => {
			response!.success = false;
			response!.msg = 'Failed to communicate with the server';
		});
	if (response.success) {
		cookies.set(SESSION_LABEL, token, {
			path: '/',
			sameSite: false,
			secure: !dev,
			maxAge: WEEK,
		});
		response.msg = token;
	}
	return response;
};
