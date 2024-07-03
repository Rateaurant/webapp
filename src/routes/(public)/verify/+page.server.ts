import type { PageServerLoad } from './$types';
import { HTTPCodes, ServerEndPoints, request } from '$scripts/server';
import { dev } from '$app/environment';
import { SESSION_LABEL, WEEK } from '$scripts/cookie';
import { Logger } from '$scripts/logger';
import { fail } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ url, cookies }) => {
	Logger.info('Verify: Load');
	const token = url.searchParams.get('code');
	if (token == null) {
		return {
			type: 'failure',
			message: 'Check your mail'
		};
	}
	const response: { type: 'success' | 'failure', message: string } = {
		type: 'failure',
		message: 'Unknown'
	};
	await (await request(ServerEndPoints.VerifyLogin, null, { code: token }))
		.on(HTTPCodes.NOT_ACCEPTABLE, () => {
			Logger.info('Verify: NOT_ACCEPTABLE');
			response.type = 'failure';
			response.message = 'Invalid Code';
			return fail(HTTPCodes.NOT_ACCEPTABLE, { message: 'Invalid Code' })
		})
		.on(HTTPCodes.ACCEPTED, () => {
			cookies.set(SESSION_LABEL, token, {
				path: '/',
				sameSite: false,
				secure: !dev,
				maxAge: WEEK,
			});
			response.type = 'success';
			response.message = token;
			return { message: token };
		})
		.catch(() => {
			Logger.error('Verify: Server Communication Faulted');
			response.type = 'failure';
			response.message = 'Failed to communicate with the server';
			return fail(HTTPCodes.NOT_ACCEPTABLE, { message: 'Failed to communicate with the server' })
		}).getResult();
	return response;
};
