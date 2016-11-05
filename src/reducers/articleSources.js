import ApiService from 'services/api/ApiService';
import { fromJS, Map } from "immutable";
import {
	FETCH_ARTICLESOURCES_REQUEST,
	FETCH_ARTICLESOURCES,
	FETCH_ARTICLESOURCES_SUCCESS,
} from "actions/articleSources";

const initialState = fromJS({
	sources: [],
});

export default function articleSourcesReducer (state = initialState, action) {
  	switch (action.type) {
  		case FETCH_ARTICLESOURCES:
  			return state;

  		case FETCH_ARTICLESOURCES_SUCCESS:
  			return state.set("sources", action.payload);

  		default:
  		return state;
	}
}
