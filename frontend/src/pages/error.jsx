import logo from "../assets/argentBankLogo.png";
import { Link } from "react-router-dom";
function User() {
	return (
		<main className="main bg-dark">
			<div className="error-page">
				This page doesn't longer exist, click on logo to go to Home Page.
			</div>
			<br />
			<Link to="/">
				<img className="main-nav-logo-image" src={logo} alt="logo" />
				<h1 className="sr-only">ArgentBank</h1>
			</Link>
		</main>
	);
}

export default User;
