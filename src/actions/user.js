import ApiService from "services/api/ApiService";
import { push } from "react-router-redux";

// ------------------------------------
// Constants
// ------------------------------------
export const USER_AUTHENTICATE_REQUEST = "USER_AUTHENTICATE_REQUEST";
export const USER_AUTHENTICATE_SUCCESS = "USER_AUTHENTICATE_SUCCESS";
export const USER_AUTHENTICATE_FAIL = "USER_AUTHENTICATE_FAIL";

// ------------------------------------
// Actions
// ------------------------------------
export function userAuthenticate(accessToken) {
  return (dispatch, getState) => {
    dispatch({ type: USER_AUTHENTICATE_REQUEST });
    const apiService = new ApiService();
    apiService.user().authenticate(accessToken)
    .then(response => {
      return dispatch({ type: USER_AUTHENTICATE_SUCCESS });
    })
    .catch(e => {
      console.log("fail", e);
      return dispatch({ type: USER_AUTHENTICATE_FAIL });
    });
  };
}

export default {
  userAuthenticate,
}