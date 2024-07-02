import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { dev } from "$app/environment";
import { HTTPCodeTypes, HTTPCodes, ServerEndPoints, request } from "$scripts/server";
import type { ActionData } from "$scripts/action";

const WEEK = 60 * 60 * 24 * 30;

export const load: PageServerLoad = async ({ url, cookies }) => {
    let response: ActionData = { success: true, msg: '' };
    const token = url.searchParams.get("code");
    if (token == null) {
        return response;
    }
    cookies.set('session', token, {
        path: '/',
        sameSite: false,
        secure: !dev,
        maxAge: WEEK
    });
    const res = await request(ServerEndPoints.VerifyLogin, null, { extendEndpoint: `?code=${token}` })
    console.log(res.response)
    res.on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
        response = { success: false, msg: 'Invalid Code' };
    });
    if (response.success) {
        redirect(303, '/');
    }
    return response;
}