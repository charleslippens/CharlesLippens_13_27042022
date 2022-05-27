// action for sending information
// describe differents change for state

import { createAction } from "@reduxjs/toolkit";

export const loadTokenPending = createAction("load-token-pending");

export const loadTokenSuccess = createAction("get-token-success", (token) => {
	return {
		payload: { token },
	};
});

export const loadTokenRejected = createAction("get-token-rejected", (error) => {
	return {
		payload: { error },
	};
});
