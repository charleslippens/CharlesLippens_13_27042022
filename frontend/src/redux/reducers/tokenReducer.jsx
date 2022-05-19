import { createReducer } from "@reduxjs/toolkit";

import { loadTokenPending, loadTokenRejected, loadTokenSuccess } from "../actions/getToken.jsx";

const initialStateToken = {
	isLoading: false,
	token: "",
	tokenExist: "",
	error: "",
};

//  reducer for handling application state changes
// 3 actions: pending, success, error
// use automatically Immer, use state and actions
const tokenReducer = createReducer(initialStateToken, (builder) => {
	return builder
		.addCase(loadTokenPending, (draft) => {
			draft.isLoading = true;
			draft.token = "";
			draft.tokenExist = "";
			draft.error = "";
			return;
		})
		.addCase(loadTokenSuccess, (draft, action) => {
			draft.isLoading = false;
			draft.token = action.payload;
			draft.tokenExist = true;
			draft.error = "";
			return;
		})
		.addCase(loadTokenRejected, (draft, action) => {
			draft.isLoading = false;
			draft.token = "";
			draft.tokenExist = false;
			draft.error = action.payload;
			return;
		});
});
export default tokenReducer;
