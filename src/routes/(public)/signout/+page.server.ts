import type { PageServerLoad } from './$types';
import { SESSION_LABEL } from '$scripts/cookie';
import { Logger } from '$scripts/logger';

export const load: PageServerLoad = async ({ cookies }) => {
	Logger.info('Signout: Load');
	cookies.delete(SESSION_LABEL, { path: '/' });
	return {};
};
