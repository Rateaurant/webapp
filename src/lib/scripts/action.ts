import type { Cookies } from '@sveltejs/kit';

export type ActionData = {
	success: boolean;
	msg: string;
} | null;
