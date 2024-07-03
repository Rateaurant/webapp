import type { PageServerLoad } from './$types';
import { HTTPCodes, ServerEndPoints, request } from '$scripts/server';
import type { ActionData } from '$scripts/action';
import { dev } from '$app/environment';
import { SESSION_LABEL, WEEK } from '$scripts/cookie';
import { Logger } from '$scripts/logger';

export const load: PageServerLoad = async ({ url, cookies }) => {
	Logger.info('Verify: Load');
	let response: ActionData = { success: true, msg: '' };
	const token = url.searchParams.get('code');
	if (token == null) {
		return response;
	}
	(await request(ServerEndPoints.VerifyLogin, null, { code: token }))
		.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
			Logger.info('Verify: NOT_ACCEPTABLE');
			response!.success = false;
			response!.msg = 'Invalid Code';
		})
		.catch(() => {
			Logger.error('Verify: Server Communication Faulted');
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
