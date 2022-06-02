import axios from "axios";
import {
	loadTokenPending,
	loadTokenRejected,
	loadTokenSuccess,
} from "../redux/actions/tokenGet.jsx";
import { loadUserPending, loadUserRejected, loadUserSuccess } from "../redux/actions/userGet.jsx";
import { userEditPending, userEditRejected, userEditSuccess } from "../redux/actions/userEdit.jsx";

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

// send a post request to get user infos/token (bearer JWT token)
export function UserData(token) {
	return (dispatch) => {
		dispatch(loadUserPending());
		axios({
			method: "POST",
			url: "/profile",
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => {
				dispatch(loadUserSuccess(response.data));
				console.log(dispatch(loadUserSuccess(response.data)));
			})
			.catch((error) => {
				dispatch(loadUserRejected(error.message));
			});
	};
}

// login to the back-end API with JWT tokens for authentication
// dispatch to change state
export function TokenData(email, password) {
	return (dispatch) => {
		dispatch(loadTokenPending());
		axios
			.post("/login", {
				email,
				password,
			})
			.then((response) => {
				dispatch(loadTokenSuccess(response.data.body.token));
				dispatch(UserData(response.data.body.token));
				localStorage.setItem("token", response.data.body.token);
				const token = localStorage.getItem("token");
				dispatch(UserData(token));
				//	dispatch(getUser(response.data.body.token));
				//	console.log(dispatch(getUser(response.data.body.token)));
			})
			.catch((error) => {
				dispatch(loadTokenRejected(error.message));
			});
	};
}

// edit firstname and lastname for user
export const usersEdit = (firstName, lastName) => {
	const token = localStorage.getItem("token");
	return (dispatch) => {
		dispatch(userEditPending());
		axios({
			method: "PUT",
			url: "/profile",
			headers: { Authorization: `Bearer ${token}` },
			data: {
				firstName,
				lastName,
			},
		})
			.then((response) => {
				dispatch(userEditSuccess(response.data));
			})
			.catch((error) => {
				dispatch(userEditRejected(error.message));
			});
	};
};
