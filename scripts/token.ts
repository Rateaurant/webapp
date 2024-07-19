const ACCESS_TOKEN_LABEL = "access_token";
const REFRESH_TOKEN_LABEL = "refresh_token";

export function saveTokens(access_token: string | null, refresh_token: string) {
    if (access_token) {
        localStorage.setItem(ACCESS_TOKEN_LABEL, access_token);
    } else {
        localStorage.removeItem(ACCESS_TOKEN_LABEL);
    }
    if (refresh_token) {
        localStorage.setItem(REFRESH_TOKEN_LABEL, refresh_token);
    } else {
        localStorage.removeItem(REFRESH_TOKEN_LABEL);
    }
}

export function getTokens(): { access_token: string | null; refresh_token: string | null } {
    return {
        access_token: localStorage.getItem(ACCESS_TOKEN_LABEL),
        refresh_token: localStorage.getItem(REFRESH_TOKEN_LABEL),
    };
}