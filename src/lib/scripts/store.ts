import { writable } from "svelte/store";

export const session = writable<string | undefined>(undefined);
export const email = writable<string>('');
export const username = writable<string>('');
export const password = writable<string>('');