import { Link } from "react-router-dom";
import logo from "../assets/argentBankLogo.png";
import { discon } from "../redux/actions/disconnect.jsx";
import { useSelector, useDispatch } from "react-redux";

function Header() {
	const dispatch = useDispatch();

	const disconnect = () => {
		sessionStorage.removeItem("token");
		localStorage.removeItem("token");
		return (dispatch) => {
			dispatch(discon());
		};
	};

	const selectLogin = (state) => state.datatUser.isLogin;
	const login = useSelector(selectLogin);

	const selectUser = (state) => state.datatUser.user;
	const user = useSelector(selectUser);
	return (
		<nav className="main-nav">
			<Link to="/">
				<img className="main-nav-logo-image" src={logo} alt="logo" />
				<h1 className="sr-only">Argent Bank</h1>
			</Link>
			{login ? (
				<div>
					<Link to="/profil" className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						{user.body.firstName}
					</Link>
					<button className="main-nav-item" onClick={() => dispatch(disconnect())}>
						<i className="fas fa-sign-out-alt"></i>
						Log out
					</button>
				</div>
			) : (
				<div>
					<Link to="./login" className="main-nav-item">
						<i className="fa fa-user-circle"></i>
						<button className="main-nav-item">Sign In</button>
					</Link>
				</div>
			)}
		</nav>
	);
}

export default Header;
