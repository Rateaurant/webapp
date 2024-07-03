import { SESSION_LABEL } from '$scripts/cookie';
import { Logger } from '$scripts/logger';
import type { LayoutServerLoad } from './$types';

type PageData = {
	session: string | undefined;
};

export const load = (async ({ cookies }) => {
	Logger.info('Layout: Load');
	return {
		session: cookies.get(SESSION_LABEL),
	};
}) satisfies LayoutServerLoad;
