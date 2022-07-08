import accountData from "../datas/dataAccounts.jsx";
import { usersEdit } from "../services/axiosApi.jsx";
//import { UserData } from "../services/axiosApi.jsx";

import Account from "../components/account.jsx";
import { Navigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

function User() {
	//const store = useSelector((state) => state);

	const dispatch = useDispatch();
	const [nameEdit, setnameEdit] = useState(false);
	const [newFirstName, setNewFirstName] = useState("");
	const [newLastName, setNewLastName] = useState("");
	const [editNameError, setEditNameError] = useState("");
	const selectUser = (state) => state.datatUser.user.body;

	const user = useSelector(selectUser);
	//console.log(user);
	if (user === undefined) {
		return <Navigate to="/" />;
	}
	const firstName = user.firstName;
	const lastName = user.lastName;
	const edit = (event) => {
		event.preventDefault();
		if (newFirstName === firstName && newLastName === lastName) {
			setEditNameError("FirstName and LastName are equal, please choose differents ones");
		} else if (newFirstName.length === 0 || newLastName.length === 0) {
			setEditNameError("Inputs are empty");
		} else if (newFirstName.length > 0 && newLastName.length > 0) {
			dispatch(usersEdit(newFirstName, newLastName));
			setnameEdit(false);
			setEditNameError("");
		}
	};
	return (
		<>
			<main className="main bg-dark">
				<div className="header">
					<h1>
						Welcome back
						<br />
						{firstName} {lastName}
					</h1>
				</div>
				{nameEdit ? (
					<div>
						<input
							className="edit-button"
							type="button"
							value="Edit Name"
							onClick={() => {
								setnameEdit(true);
							}}
						/>
						<input
							className="edit-input"
							type="text"
							value={newFirstName}
							placeholder={firstName}
							onChange={(e) => {
								setNewFirstName(e.target.value);
							}}
						/>
						<input
							className="edit-input"
							type="text"
							value={newLastName}
							placeholder={lastName}
							onChange={(e) => {
								setNewLastName(e.target.value);
							}}
						/>
						<button className="edit-button" type="submit" value="Save" onClick={edit}>
							Save
						</button>
						<button
							className="edit-button"
							type="button"
							value="Cancel"
							onClick={() => {
								setnameEdit(false);
							}}
						>
							Cancel
						</button>
					</div>
				) : (
					<input
						className="edit-button"
						type="button"
						onClick={() => {
							setnameEdit(true);
						}}
						value="Edit Name"
					/>
				)}
				<div>
					{editNameError && (
						<div className="input-names input-error">{editNameError}</div>
					)}
				</div>
				<h3 className="sr-only">Accounts</h3>
				{accountData.map((account, index) => (
					<Account
						key={index}
						title={account.title}
						amount={account.amount}
						description={account.description}
					/>
				))}
			</main>
		</>
	);
}

export default User;
