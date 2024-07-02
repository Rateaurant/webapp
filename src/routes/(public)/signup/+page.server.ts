import { request, ServerEndPoints, HTTPCodes } from "$scripts/server";
import { redirect, type Actions } from "@sveltejs/kit";

type ActionData = {
    success: boolean,
    msg: string
};

export const actions = {
    default: async (event) => {
        let response: ActionData = { success: true, msg: '' };
        (
            await request(
                ServerEndPoints.CustomerSignUp,
                null,
                await event.request.formData(),
            )
        )
            .on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
                response = { success: false, msg: 'Eamil already in use' };
            })
            .on(HTTPCodes.CREATED, (_) => {
                redirect(302, '/temp');
            });
        return response;
    }
} satisfies Actions;