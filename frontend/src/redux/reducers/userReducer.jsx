import { createReducer } from "@reduxjs/toolkit";

import { loadUserPending, loadUserRejected, loadUserSuccess } from "../actions/getUser.jsx";
import { discon } from "../actions/disconnect.jsx";

const initialStateUser = {
	isLoading: false,
	isLogin: false,
	user: {},
	error: "",
};

// reducer for handling application state changes
// 3 actions: pending, success, error

const userReducer = createReducer(initialStateUser, (builder) => {
	return builder
		.addCase(loadUserPending, (draft) => {
			draft.isLoading = true;
			return;
		})
		.addCase(loadUserSuccess, (draft, action) => {
			draft.isLoading = false;
			draft.isLogin = true;
			draft.user = action.payload;
			draft.error = "";
			return;
		})
		.addCase(loadUserRejected, (draft, action) => {
			draft.isLoading = false;
			draft.isLogin = false;
			draft.user = {};
			draft.error = action.payload;
			return;
		})
		.addCase(discon, (draft, action) => {
			draft.isLoading = false;
			draft.isLogin = false;
			draft.user = {};
			draft.error = action.payload;
			return;
		});
});

export default userReducer;
