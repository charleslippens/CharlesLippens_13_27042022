import { createReducer } from "@reduxjs/toolkit";

import { loadUserPending, loadUserRejected, loadUserSuccess } from "../actions/userGet.jsx";
import { discon } from "../actions/disconnect.jsx";

const initialStateUser = {
	isLoad: false,
	isLogin: false,
	user: {},
	rejected: "",
};

// reducer for handling application state changes
// 3 actions: pending, success, error

const userReducer = createReducer(initialStateUser, (builder) => {
	return builder
		.addCase(loadUserPending, (draft) => {
			draft.isLoad = true;
			return;
		})
		.addCase(loadUserSuccess, (draft, action) => {
			draft.isLoading = false;
			draft.isLogin = true;
			draft.user = action.payload;
			draft.rejected = "";
			return;
		})
		.addCase(loadUserRejected, (draft, action) => {
			draft.isLoad = false;
			draft.isLogin = false;
			draft.user = {};
			draft.rejected = action.payload;
			return;
		})
		.addCase(discon, (draft, action) => {
			draft.isLoad = false;
			draft.isLogin = false;
			draft.user = {};
			draft.rejected = action.payload;
			return;
		});
});

export default userReducer;
