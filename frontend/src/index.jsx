import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./services/router.jsx";
import { Provider } from "react-redux";
import store from "./redux/store/store.jsx";

// Provider + store redux
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router />
		</Provider>
	</React.StrictMode>
);
