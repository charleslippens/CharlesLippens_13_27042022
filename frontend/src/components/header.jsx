import { Link } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";

function Header() {
	return (
		<nav className="main-nav">
			<Link to="/">
				<img className="main-nav-logo-image" src={logo} alt="logo de argentBank" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			<div>
				<Link to="./login" className="main-nav-item">
					<i className="fa fa-user-circle"></i>
					<span className="main-nav-item">Sign In</span>
				</Link>
			</div>
		</nav>
	);
}

export default Header;
