import { createReducer } from "@reduxjs/toolkit";

import { loadTokenPending, loadTokenRejected, loadTokenSuccess } from "../actions/tokenGet.jsx";

const initialStateToken = {
	isLoad: false,
	token: "",
	tokenExist: "",
	rejected: "",
};

//  reducer for handling application state changes
// 3 actions: pending, success, error
// use automatically Immer, use state and actions
const tokenReducer = createReducer(initialStateToken, (builder) => {
	return builder
		.addCase(loadTokenPending, (draft) => {
			draft.isLoad = true;
			draft.token = "";
			draft.tokenExist = "";
			draft.rejected = "";
			return;
		})
		.addCase(loadTokenSuccess, (draft, action) => {
			draft.isLoad = false;
			draft.token = action.payload;
			draft.tokenExist = true;
			draft.rejected = "";
			return;
		})
		.addCase(loadTokenRejected, (draft, action) => {
			draft.isLoad = false;
			draft.token = "";
			draft.tokenExist = false;
			draft.rejected = action.payload;
			return;
		});
});
export default tokenReducer;
