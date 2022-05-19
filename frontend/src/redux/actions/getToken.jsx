// action for sending information
// describe differents change for state

import { createAction } from "@reduxjs/toolkit";

export const loadTokenPending = createAction("load-token");

export const loadTokenSuccess = createAction("get-token-success", (token) => {
	return {
		payload: { token },
	};
});

export const loadTokenRejected = createAction("get-token-error", (error) => {
	return {
		payload: { error },
	};
});
