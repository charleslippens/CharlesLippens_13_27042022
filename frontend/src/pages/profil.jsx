import accountData from "../datas/dataAccounts.jsx";
import Account from "../components/account.jsx";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

function User() {
	const selectUser = (state) => state.getUser.user.body;
	const user = useSelector(selectUser);
	if (user === undefined) {
		return <Navigate to="/login" />;
	}
	const firstName = user.firstName;
	const lastName = user.lastName;
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
				<div>
					<input className="edit-button" type="button" value="Edit Name" />
					<input className="edit-input" type="text" />
					<input className="edit-input" type="text" />
					<button className="edit-button" type="submit" value="Save">
						Save
					</button>
					<button className="edit-button" type="button" value="Cancel">
						Cancel
					</button>
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
