import axios from "axios";
import {
	loadTokenPending,
	loadTokenRejected,
	loadTokenSuccess,
} from "../redux/actions/getToken.jsx";
import { loadUserPending, loadUserRejected, loadUserSuccess } from "../redux/actions/getUser.jsx";

axios.defaults.baseURL = "http://localhost:3001/api/v1/user";

// login to the back-end API with JWT tokens for authentication
// dispatch to change state
export const getToken = (email, password) => {
	return (dispatch) => {
		dispatch(loadTokenPending());
		axios
			.post("/login", {
				email,
				password,
			})
			.then((response) => {
				dispatch(loadTokenSuccess(response.data.body.token));
				dispatch(getUser(response.data.body.token));
				//	console.log(dispatch(getUser(response.data.body.token)));
			})
			.catch((error) => {
				dispatch(loadTokenRejected(error.message));
			});
	};
};
// send a post request to get user infos/token (bearer JWT token)
export const getUser = (token) => {
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
};
