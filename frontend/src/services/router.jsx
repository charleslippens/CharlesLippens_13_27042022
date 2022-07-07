import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../styling/main.css";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Error from "../pages/error.jsx";

import Home from "../pages/home.jsx";
import Login from "../pages/login.jsx";
import Profil from "../pages/profil.jsx";
//Routes: login, profil, home
function Router() {
	return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route index element={<Home />} />
					<Route path="login" element={<Login />} />
					<Route path="profil" element={<Profil />} />
					<Route path="*" element={<Error />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default Router;
