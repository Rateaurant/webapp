import type { LayoutServerLoad } from './$types';

type PageData = {
    session: string | undefined;
}

export const load = (async ({ cookies }) => {
    return {
        session: cookies.get('session')
    };
}) satisfies LayoutServerLoad;