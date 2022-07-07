import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";

import { TokenData } from "../services/axiosApi.jsx";

//  Navigate to the login page (/login)
//   Fill out credentials
//  Successfully navigate to a profile page (/profile)
// 	react-redux: to send actions from component, useSelector to extract piece of state and update component when changes

function Login() {
	const [invalid] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);

	const message = useSelector((state) => state.datatUser.user.status);
	const tokenExist = useSelector((state) => state.token.tokenExist);
	const dispatch = useDispatch();
	const handleChangeRememberMe = () => setRememberMe(!rememberMe);

	const handleSub = (e) => {
		e.preventDefault();
		dispatch(TokenData(email, password, rememberMe));
	};

	if (message === 200) {
		return <Navigate to="/profil" />;
	}
	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className=" fa fa-user-circle"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSub}>
					<div className="input-wrapper">
						<label htmlFor="username">Email</label>
						<input
							type="text"
							id="username"
							name="email"
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
					</div>

					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
							}}
						/>
					</div>
					<div>{invalid}</div>
					{tokenExist === false && (
						<div className="error_login">Email or password are invalid</div>
					)}
					<div className="input-remember">
						<input
							type="checkbox"
							id="remember-me"
							checked={rememberMe}
							onChange={handleChangeRememberMe}
						/>
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className="sign-in-button">Sign In</button>
				</form>
			</section>
		</main>
	);
}

export default Login;
