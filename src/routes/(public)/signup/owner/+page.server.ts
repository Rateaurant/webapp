import { goto } from "$app/navigation";
import { request, ServerEndPoints, HTTPCodes, EMAIL_LABEL } from "$scripts/server";
import { setContext } from "svelte"
import type { ActionData } from "$scripts/action";
import type { Actions } from "@sveltejs/kit";

export const actions = {
    default: async (event) => {
        let response: ActionData = { success: true, msg: '' };
        let formData = await event.request.formData();
        (await request(ServerEndPoints.OwnerSignUp, null, formData))
            .on(HTTPCodes.NOT_ACCEPTABLE, (_) => {
                response = { success: false, msg: 'Email already in use' };
            })
            .on(HTTPCodes.CREATED, (_) => {
                setContext(EMAIL_LABEL, formData.get(EMAIL_LABEL));
                setContext('is_owner', true);
                goto('/verify');
            });
        return response;
    }
} satisfies Actions;