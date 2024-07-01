const SERVER_ADDRESS = "https://api.rateaurant.vercel.app"

// User data
const USERNAME_LABEL = "username"
const PASSWORD_LABEL = "password"
const EMAIL_LABEL = "email"
const LABELS = [USERNAME_LABEL, PASSWORD_LABEL, EMAIL_LABEL];

// HTTP Codes
export enum HTTPCodes {
    OK = 200,
    CREATED = 201,
    ACCEPTED = 202,

    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    NOT_FOUND = 404,
    METHOD_NOT_ALLOWED = 405,
    NOT_ACCEPTABLE = 406,

    INTERNAL_SERVER_ERROR = 500,
    NOT_IMPLEMENTED = 501,
    SERVICE_UNAVAILABLE = 503
}

// METHODS
const GET = 'GET'
const POST = 'POST'

export enum ServerEndPoints {
    CustomerSignUp = "auth/register/user",
    OwnerSignUp = "auth/register/owner",

    UserLogin = "auth/login",
    VertifyLogin = "auth/verify",

    // Session Token Required Endpoints
    Edit = "edit",
    FoodGet = "restaurant/food/get",
    FoodGetAll = "restaurant/food/get_all",
    FoodAdd = "restaurant/food/add",
    FoodEdit = "restaurant/food/edit",
    FoodDelete = "restaurant/food/delete"
}

class ServerResponse {
    response: Response
    constructor(response: Response) {
        this.response = response;
    }
    on(code: number, handler: (response: Response) => Promise<void> | void): this {
        if (this.response.status == code) {
            handler(this.response);
        }
        return this;
    }
}

function getMethod(endpoint: ServerEndPoints): string {
    const postEndPoints = [ServerEndPoints.CustomerSignUp, ServerEndPoints.OwnerSignUp, ServerEndPoints.UserLogin,
    ServerEndPoints.Edit, ServerEndPoints.FoodAdd, ServerEndPoints.FoodEdit, ServerEndPoints.FoodDelete];
    const getEndPoints = [ServerEndPoints.VertifyLogin, ServerEndPoints.FoodGet, ServerEndPoints.FoodGetAll];
    if (postEndPoints.includes(endpoint)) {
        return POST;
    }
    if (getEndPoints.includes(endpoint)) {
        return GET;
    }
    return GET; // default case
}
function getEndpoint(endpoint: ServerEndPoints): string {
    return SERVER_ADDRESS + "/" + endpoint;
}

export async function request(endpoint: ServerEndPoints, body?: BodyInit): Promise<ServerResponse> {
    return new ServerResponse(await fetch(getEndpoint(endpoint), {
        method: getMethod(endpoint),
        body
    }));
}

// Equivalently do something like this ->
// new URLSearchParams([
// 	['username', formData.username],
// 	['email', formData.email],
// 	['password', formData.password],
// ]),
export function formDataToBody(formData: Object): BodyInit {
    const searchParams = [];
    for (const keys of Object.keys(formData)) {
        const simple_key = keys.trim().toLowerCase();
        if (LABELS.includes(simple_key)) {
            searchParams.push([simple_key, (formData as any)[simple_key]])
        }
    }
    return new URLSearchParams(searchParams);
}