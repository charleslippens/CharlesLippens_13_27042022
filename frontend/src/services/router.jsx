import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";

import "../styling/main.css";

export default function Router() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}
