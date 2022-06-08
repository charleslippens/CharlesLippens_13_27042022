import userReducer from "../reducers/reducerUser.jsx";
import tokenReducer from "../reducers/reducerToken.jsx";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
	key: "auth",
	version: 1,
	storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

// State management
// store to manage all of the data
// configuration store containing reducers

const store = configureStore({
	reducer: {
		token: tokenReducer,
		getUser: persistedReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});
export default store;
