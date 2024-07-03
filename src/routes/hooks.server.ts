import { SESSION_LABEL } from '$scripts/cookie';
import { Logger } from '$scripts/logger';
import { redirect, type Handle } from '@sveltejs/kit';

// Basically paths under (private)
const STRICTLY_AUTH_REQUIRED_PATHS = ['/restaurant'];

function isOnlyAuthPath(path: string): boolean {
	for (const strictPath of STRICTLY_AUTH_REQUIRED_PATHS) {
		if (path.includes(strictPath)) {
			return true;
		}
	}
	return false;
}

export const handle: Handle = async ({ event, resolve }) => {
	Logger.info('Hook: Handle')
	const requestedPath = event.url.pathname;
	const cookies = event.cookies;

	const currentToken = cookies.get(SESSION_LABEL);

	if (isOnlyAuthPath(requestedPath) && currentToken == undefined) {
		Logger.warn(`Hook: Attempted unauthenicated access of ${requestedPath}`);
		throw redirect(303, '/signin');
	}

	const response = await resolve(event);
	return response;
};
