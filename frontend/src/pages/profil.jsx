import accountData from "../datas/dataAccounts.jsx";
import Account from "../components/account.jsx";

function User() {
	return (
		<>
			<main className="main bg-dark">
				<div className="header">
					<h1>
						Welcome back
						<br />
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
				<input className="edit-button" type="button" value="Edit Name" />
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
