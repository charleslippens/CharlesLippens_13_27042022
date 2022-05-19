import userReducer from "../reducers/userReducer.jsx";
import tokenReducer from "../reducers/tokenReducer.jsx";
import { configureStore } from "@reduxjs/toolkit";

// State management
// store to manage all of the data
// configuration store containing reducers

const store = configureStore({
	reducer: {
		token: tokenReducer,
		getUser: userReducer,
	},
});
export default store;
