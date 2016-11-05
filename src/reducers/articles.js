import ApiService from 'services/api/ApiService';
import { fromJS, Map } from "immutable";
import {
	FETCH_POPULAR_REQUEST,
	FETCH_POPULAR,
	FETCH_POPULAR_SUCCESS,
} from "actions/articles";

const initialState = fromJS({
	items: [],
});

export default function articlesReducer (state = initialState, action) {
  	switch (action.type) {
  		case FETCH_POPULAR:
  			return state;

  		case FETCH_POPULAR_SUCCESS:
  			return state.set("items", action.payload);

  		default:
  		return state;
	}
}
