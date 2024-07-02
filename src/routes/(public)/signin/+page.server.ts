import { request, ServerEndPoints } from "$scripts/server";
import { redirect, type Actions } from "@sveltejs/kit";

type ActionData = {
    success: boolean,
    msg: string
};

export const actions = {
    default: async (event) => {
        let response: ActionData = { success: true, msg: '' };
        await request(ServerEndPoints.UserLogin, null, await event.request.formData());
        redirect(302, '/temp');
    }
} satisfies Actions;