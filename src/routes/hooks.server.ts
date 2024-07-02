import { redirect, type Handle } from "@sveltejs/kit";

// Basically paths under (private)
const STRICTLY_AUTH_REQUIRED_PATHS = [
    "/restaurant",
    "/temp"
];

function isOnlyAuthPath(path: string): boolean {
    for (const strictPath of STRICTLY_AUTH_REQUIRED_PATHS) {
        if (path.includes(strictPath)) {
            return true;
        }
    }
    return false;
}

export const handle: Handle = async ({ event, resolve }) => {
    const requestedPath = event.url.pathname;
    const cookies = event.cookies;

    const currentToken = cookies.get('auth');
    const isTokenValid = currentToken === "123"; // temp

    if (isOnlyAuthPath(requestedPath) && !isTokenValid) {
        throw redirect(303, "/signin");
    }

    const response = await resolve(event);
    return response;

}