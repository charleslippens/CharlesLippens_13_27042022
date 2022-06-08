import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./services/router.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/storeRedux.jsx";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistStore } from "redux-persist";
// Provider + store redux
let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Router />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
