import { DEV } from './is_dev';
import { Logger } from './logger';

const SERVER_ADDRESS = DEV
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

export enum EndPoints {
	Root = '/',
	CustomerSignUp = 'register/user',
	OwnerSignUp = 'register/owner',

	UserLogin = 'login',
	// VerifyLogin = 'auth/verify',
	GenTokens = 'gen_tokens',

	// Session Token Required Endpoints
	// Edit = 'edit',
	// FoodGet = 'restaurant/food/get',
	// FoodGetAll = 'restaurant/food/get_all',
	// FoodAdd = 'restaurant/food/add',
	// FoodEdit = 'restaurant/food/edit',
	// FoodDelete = 'restaurant/food/delete',
}

export namespace Schema {
	export type MessageOnly = { message: string };
	export type TokenData = { access_token: string; refresh_token: string; message: string };
}

function requiresAuth(endpoint: EndPoints): boolean {
	return ![
		EndPoints.CustomerSignUp,
		EndPoints.OwnerSignUp,
		EndPoints.UserLogin,
		EndPoints.GenTokens,
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

export async function checkServerHealth(): Promise<boolean> {
	return await (await request<boolean>(EndPoints.Root, null, {}))
		.on_type(HTTPCodeTypes.Successful, () => true)
		.catch(() => false)
		.getResult() ?? false;
}

class ServerResponse<T> {
	response: Response | null;
	handler_response: Promise<T> | T | null;
	constructor(response: Response | null) {
		this.response = response;
		this.handler_response = null;
	}
	on(
		code: number,
		handler: (response: Response) => Promise<T> | T,
	): this {
		if (this.response == null || this.handler_response != null) {
			return this;
		}
		if (this.response.status == code) {
			const response = handler(this.response);
			if (response) {
				this.handler_response = response;
			}
		}
		return this;
	}
	on_type(
		codeType: HTTPCodeTypes,
		handler: (response: Response) => Promise<T> | T,
	): this {
		if (this.response == null || this.handler_response != null) {
			return this;
		}
		if (codeType == getCodeType(this.response.status)) {
			const response = handler(this.response);
			if (response) {
				this.handler_response = response;
			}
		}
		return this;
	}
	catch(handler: () => Promise<T> | T): this {
		if (this.response == null) {
			const response = handler();
			if (response) {
				this.handler_response = response;
			}
		}
		return this;
	}
	async getResult(): Promise<T | null> {
		let result: T | null;
		if (this.handler_response instanceof Promise) {
			result = await this.handler_response;
		} else {
			result = this.handler_response;
		}
		return result;
	}
}

function getMethod(endpoint: EndPoints): string {
	const postEndPoints: EndPoints[] = [
		EndPoints.CustomerSignUp,
		EndPoints.OwnerSignUp,
		// EndPoints.Edit,
		// EndPoints.FoodAdd,
		// EndPoints.FoodEdit,
		// EndPoints.FoodDelete,
		EndPoints.UserLogin,
	];
	const getEndPoints: EndPoints[] = [
		EndPoints.GenTokens,
		// EndPoints.VerifyLogin,
		// EndPoints.FoodGet,
		// EndPoints.FoodGetAll,
	];
	if (postEndPoints.includes(endpoint)) {
		return POST;
	}
	if (getEndPoints.includes(endpoint)) {
		return GET;
	}
	return GET; // default case
}
function getEndpoint(endpoint: EndPoints): string {
	return SERVER_ADDRESS + '/' + endpoint;
}

export async function request<T>(
	endpoint: EndPoints,
	token: string | null,
	data: Object,
): Promise<ServerResponse<T>> {
	if (requiresAuth(endpoint) && token == null) {
		Logger.error(`Server: ${endpoint} requires Authentication`);
		return new ServerResponse(null);
	}
	const headers = {};
	if (token) {
		(headers as any)['cookie'] = token;
	}
	const method = getMethod(endpoint);
	const url = getEndpoint(endpoint);
	let response: Response;
	try {
		if (method == POST) {
			response = await fetch(url, {
				method,
				headers,
				body: objToBody(data),
			});
		} else if (method == GET) {
			response = await fetch(url + objToParams(data), { headers });
		} else {
			Logger.error(`Unhandled ${method} HTTP Method`);
			return new ServerResponse(null);
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