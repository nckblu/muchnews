import ApiService from "services/api/ApiService";

// ------------------------------------
// Constants
// ------------------------------------
export const USER_AUTHENTICATE = 'USER_AUTHENTICATE';
export const USER_AUTHENTICATE_REQUEST = 'USER_AUTHENTICATE_REQUEST';
export const USER_AUTHENTICATE_SUCCESS = 'USER_AUTHENTICATE_SUCCESS';
export const USER_AUTHENTICATE_FAIL = 'USER_AUTHENTICATE_FAIL';

// ------------------------------------
// Actions
// ------------------------------------
export function userAuthenticateRequest (state) {
  return {
    type: USER_AUTHENTICATE_REQUEST,
  }
}

export function userAuthenticate(accessToken) {
  return (dispatch, getState) => {
    dispatch(userAuthenticateRequest());
    const apiService = new ApiService();
    apiService.user().authenticate(accessToken)
    .then(response => {
    	return dispatch(userAuthenticateSuccess(response.data.token));
    })
    .catch(e => {
      console.log('fail', e)
    	return dispatch(userAuthenticateFail());
    });
  }
}

export function userAuthenticateSuccess (payload) {
  return {
    type : USER_AUTHENTICATE_SUCCESS,
    payload,
  }
}

export function userAuthenticateFail (data) {
	return {
		type: USER_AUTHENTICATE_FAIL,
	}
}