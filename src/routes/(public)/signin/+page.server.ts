import { dev } from "$app/environment";
import { goto } from "$app/navigation";
import type { ActionData } from "$scripts/action";
import { HTTPCodes, request, ServerEndPoints } from "$scripts/server";
import type { Actions } from "@sveltejs/kit";

const WEEK = 60 * 60 * 24 * 30;

export const actions = {
    default: async ({ request: eventReq, cookies }) => {
        let response: ActionData = { success: true, msg: '' };
        let formData = await eventReq.formData();
        (await request(ServerEndPoints.UserLogin, null, { body: formData }))
            .on(HTTPCodes.BAD_REQUEST, (_) => {
                response = { success: false, msg: 'Invalid Response' };
            })
            .on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
                response = { success: false, msg: 'Email not registered' };
            })
            .on(HTTPCodes.UNAUTHORIZED, (_) => {
                response = { success: false, msg: 'Incorrect Password' };
            })
            .on(HTTPCodes.OK, async (response) => {
                const token: string = (await response.json()).token
                cookies.set('session', token, {
                    path: '/',
                    sameSite: false,
                    secure: !dev,
                    maxAge: WEEK
                });
            });
        goto('/')
    }
} satisfies Actions;