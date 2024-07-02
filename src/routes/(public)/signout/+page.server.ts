import type { PageServerLoad } from './$types';
import { SESSION_LABEL } from '$scripts/cookie';

export const load: PageServerLoad = async ({ cookies }) => {
	cookies.delete(SESSION_LABEL, { path: '/' });
	return {};
};
