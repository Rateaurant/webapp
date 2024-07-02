import { goto } from "$app/navigation";
import { request, ServerEndPoints, HTTPCodes, EMAIL_LABEL } from "$scripts/server";
import { setContext } from "svelte"
import type { ActionData } from "$scripts/action";
import { error, type Actions } from "@sveltejs/kit";

export const actions = {
    default: async (event) => {
        let response: ActionData = { success: true, msg: '' };
        let formData = await event.request.formData();
        (
            await request(
                ServerEndPoints.CustomerSignUp,
                null,
                { body: formData }
            )
        )
            .on(HTTPCodes.NOT_FOUND, (_) => {
                throw error(404, 'Not Found');
            })
            .on(HTTPCodes.BAD_REQUEST, (_) => {
                response = { success: false, msg: 'Invalid Response' };
            })
            .on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
                response = { success: false, msg: 'Email already in use' };
            })
            .on(HTTPCodes.CREATED, (_) => {
                goto('/verify');
            });
        return response;
    }
} satisfies Actions;