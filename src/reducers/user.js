import ApiService from "services/api/ApiService";
import { fromJS, Map } from "immutable";
import {
	USER_AUTHENTICATE_REQUEST,
	USER_AUTHENTICATE,
	USER_AUTHENTICATE_SUCCESS,
  USER_AUTHENTICATE_FAIL,
} from "actions/user";

const initialState = fromJS({
  token: null,
  name: null,
});

export default function userReducer(state = initialState, action) {
  	switch (action.type) {
    case USER_AUTHENTICATE_SUCCESS:
      console.log("action is ", action);
      return state.set("token", action.payload);
  		default:
  		return state;
  }
}
