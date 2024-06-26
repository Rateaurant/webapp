import { dev } from '$app/environment';

const SERVER_ADDRESS = dev
	? 'http://127.0.0.1:5000'
	: 'https://api.rateaurant.vercel.app';

// User data
export const USERNAME_LABEL = 'username';
export const PASSWORD_LABEL = 'password';
export const EMAIL_LABEL = 'email';

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
	SERVICE_UNAVAILABLE = 503,
}
export enum HTTPCodeTypes {
	Informational,
	Successful,
	Redirection,
	ClientError,
	ServerError,
}

// METHODS
const GET = 'GET';
const POST = 'POST';

export enum ServerEndPoints {
	CustomerSignUp = 'auth/register/user',
	OwnerSignUp = 'auth/register/owner',

	UserLogin = 'auth/login',
	VerifyLogin = 'auth/verify',

	// Session Token Required Endpoints
	Edit = 'edit',
	FoodGet = 'restaurant/food/get',
	FoodGetAll = 'restaurant/food/get_all',
	FoodAdd = 'restaurant/food/add',
	FoodEdit = 'restaurant/food/edit',
	FoodDelete = 'restaurant/food/delete',
}

function requiresAuth(endpoint: ServerEndPoints): boolean {
	return ![
		ServerEndPoints.CustomerSignUp,
		ServerEndPoints.OwnerSignUp,
		ServerEndPoints.UserLogin,
		ServerEndPoints.VerifyLogin,
	].includes(endpoint);
}

function getCodeType(status: HTTPCodes): HTTPCodeTypes {
	if (status < 200) {
		return HTTPCodeTypes.Informational;
	}
	if (status < 300) {
		return HTTPCodeTypes.Successful;
	}
	if (status < 400) {
		return HTTPCodeTypes.Redirection;
	}
	if (status < 500) {
		return HTTPCodeTypes.ClientError;
	}
	return HTTPCodeTypes.ServerError;
}

class ServerResponse {
	response: Response | null;
	constructor(response: Response | null) {
		console.log(response);
		this.response = response;
	}
	on(
		code: number,
		handler: (response: Response) => Promise<void> | void,
	): this {
		if (this.response == null) {
			return this;
		}
		if (this.response.status == code) {
			handler(this.response);
		}
		return this;
	}
	on_type(
		codeType: HTTPCodeTypes,
		handler: (response: Response) => Promise<void> | void,
	): this {
		if (this.response == null) {
			return this;
		}
		if (codeType == getCodeType(this.response.status)) {
			handler(this.response);
		}
		return this;
	}
	catch(handler: () => Promise<void> | void): this {
		if (this.response == null) {
			handler();
		}
		return this;
	}
}

function getMethod(endpoint: ServerEndPoints): string {
	const postEndPoints = [
		ServerEndPoints.CustomerSignUp,
		ServerEndPoints.OwnerSignUp,
		ServerEndPoints.Edit,
		ServerEndPoints.FoodAdd,
		ServerEndPoints.FoodEdit,
		ServerEndPoints.FoodDelete,
		ServerEndPoints.UserLogin,
	];
	const getEndPoints = [
		ServerEndPoints.VerifyLogin,
		ServerEndPoints.FoodGet,
		ServerEndPoints.FoodGetAll,
	];
	if (postEndPoints.includes(endpoint)) {
		return POST;
	}
	if (getEndPoints.includes(endpoint)) {
		return GET;
	}
	return GET; // default case
}
function getEndpoint(endpoint: ServerEndPoints): string {
	return SERVER_ADDRESS + '/' + endpoint;
}

export async function request(
	endpoint: ServerEndPoints,
	session: string | null,
	data: Object,
): Promise<ServerResponse> {
	if (requiresAuth(endpoint) && session == null) {
		throw new Error(`${endpoint} requires Authentication`);
	}
	const method = getMethod(endpoint);
	const url = getEndpoint(endpoint);
	let response: Response;
	try {
		if (method == POST) {
			response = await fetch(url, {
				method,
				body: objToBody(data),
			});
		} else if (method == GET) {
			response = await fetch(url + objToParams(data));
		} else {
			throw new Error(`Unhandled ${method} HTTP Method`);
		}
	} catch {
		return new ServerResponse(null);
	}
	return new ServerResponse(response);
}

// Equivalently do something like this ->
// new URLSearchParams([
// 	['username', formData.username],
// 	['email', formData.email],
// 	['password', formData.password],
// ]),
function objToBody(data: any): BodyInit {
	const searchParams = [];
	for (const keys of Object.keys(data)) {
		const simple_key = keys.trim().toLowerCase();
		searchParams.push([simple_key, data[simple_key]]);
	}
	return new URLSearchParams(searchParams);
}

function objToParams(data: any): string {
	let output = ``;
	const keys = Object.keys(data);
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (i == 0) {
			output += `?${key}=${data[key]}`;
			continue;
		}
		output += `&${key}=${data[key]}`;
	}
	return output;
}
