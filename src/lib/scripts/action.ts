import type { ActionFailure, SubmitFunction } from "@sveltejs/kit";

export type Action = {
	message: string
};

export type SubmitFunctionFormAction = SubmitFunction<Action, Action>;
export type HandlerResponse = ActionFailure<Action> | Action;