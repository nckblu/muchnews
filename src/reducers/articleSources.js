import ApiService from "services/api/ApiService";
import { fromJS, Map } from "immutable";
import {
	FETCH_ARTICLESOURCES_REQUEST,
	FETCH_ARTICLESOURCES,
	FETCH_ARTICLESOURCES_SUCCESS,
  SET_ACTIVE_SOURCE,
} from "actions/articleSources";

const initialState = fromJS({
  sources: undefined,
  active: null,
});

export default function articleSourcesReducer(state = initialState, action) {
  	switch (action.type) {
  		case FETCH_ARTICLESOURCES:
  			return state;

  		case FETCH_ARTICLESOURCES_SUCCESS:
      console.log("SUCCESS, setting sources to", action.payload);
  			return state.set("sources", action.payload);

    case SET_ACTIVE_SOURCE:
      return state.set("active", action.source);

  		default:
  		return state;
  }
}

