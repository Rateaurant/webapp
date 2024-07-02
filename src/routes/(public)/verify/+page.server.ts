import { goto } from "$app/navigation";
import { request, ServerEndPoints, HTTPCodes, EMAIL_LABEL } from "$scripts/server";
import { setContext } from "svelte"
import type { ActionData } from "$scripts/action";
import { error, type Actions } from "@sveltejs/kit";

export const actions = {
    is_user: async (event) => {
        let response: ActionData = { success: true, msg: '' };
        let formData = await event.request.formData();
        (
            await request(
                ServerEndPoints.VerifyLogin,
                null,
                { extendEndpoint: `/user/${formData.get("code")}` }
            )
        )
            .on(HTTPCodes.NOT_FOUND, (_) => {
                throw error(404, 'Not Found');
            })
            .on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
                response = { success: false, msg: 'Incorrect Code' };
            })
            .on(HTTPCodes.ACCEPTED, (_) => {
                goto('/');
            });
        return response;
    },
    is_owner: async (event) => {
        let response: ActionData = { success: true, msg: '' };
        let formData = await event.request.formData();
        (
            await request(
                ServerEndPoints.VerifyLogin,
                null,
                { extendEndpoint: `/owner/${formData.get("code")}` }
            )
        )
            .on(HTTPCodes.ACCEPTED, (_) => {
                goto('/');
            });
        return response;
    }
} satisfies Actions;