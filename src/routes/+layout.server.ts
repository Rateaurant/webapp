import { SESSION_LABEL } from '$scripts/cookie';
import type { LayoutServerLoad } from './$types';

type PageData = {
	session: string | undefined;
};

export const load = (async ({ cookies }) => {
	return {
		session: cookies.get(SESSION_LABEL),
	};
}) satisfies LayoutServerLoad;
