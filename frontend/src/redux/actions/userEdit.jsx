import { createAction } from "@reduxjs/toolkit";

export const userEditPending = createAction("edit-user-pending");

export const userEditRejected = createAction("edit-user-rejected", (error) => {
	return {
		payload: error,
	};
});

export const userEditSuccess = createAction("edit-user-success", (user) => {
	return {
		payload: user,
	};
});
