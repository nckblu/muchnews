import ApiService from "services/api/ApiService";

// ------------------------------------
// Constants
// ------------------------------------
export const USER_AUTHENTICATE = 'USER_AUTHENTICATE';
export const USER_AUTHENTICATE_REQUEST = 'USER_AUTHENTICATE_REQUEST';
export const USER_AUTHENTICATE_SUCCESS = 'USER_AUTHENTICATE_SUCCESS';
export const USER_AUTHENTICATE_ERROR = 'USER_AUTHENTICATE_ERROR';

// ------------------------------------
// Actions
// ------------------------------------
export function userAuthenticateRequest (state) {
  return {
    type: USER_AUTHENTICATE_REQUEST,
  }
}

export function userAuthenticate(sourceId, sort) {
  return (dispatch, getState) => {
    dispatch(userAuthenticateRequest());
    const apiService = new ApiService();
    apiService.user().authenticate();
    // .then(response => {
    // 	return dispatch(fetchPopularSuccess(response.data.articles));
    // })
    // .catch(e => {
    // 	return dispatch(fetchError());
    // });
  }
}

export function userAuthenticateSuccess (payload) {
  return {
    type : USER_AUTHENTICATE_SUCCESS,
    payload,
  }
}

export function fetchError (data) {
	return {
		type: FETCH_ERROR,
	}
}