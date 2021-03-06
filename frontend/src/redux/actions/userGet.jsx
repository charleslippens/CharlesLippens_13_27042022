// action for sending information
// describe differents change for state
// create actions creator

import { createAction } from "@reduxjs/toolkit";

export const loadUserPending = createAction("get-user-pending");

export const loadUserSuccess = createAction("get-user-success", (user) => {
	return {
		payload: user,
	};
});

export const loadUserRejected = createAction("get-user-rejected", (error) => {
	return {
		payload: error,
	};
});
