import { fromJS } from "immutable";
import {
  FETCH_ARTICLESOURCES_REQUEST,
  FETCH_ARTICLESOURCES_SUCCESS,
  FETCH_ARTICLESOURCES_FAIL,
  SET_ACTIVE_SOURCE,
} from "actions/articleSources";

const initialState = fromJS({
  sources: [],
  active: null,
  working: false,
});

export default function articleSourcesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLESOURCES_REQUEST:
      return state.set("working", true);
    case FETCH_ARTICLESOURCES_SUCCESS:
      console.log("SUCCESS, setting sources to", action.payload);
      return state.set("sources", fromJS(action.payload));
    case FETCH_ARTICLESOURCES_FAIL:
      return state.set("working", false);

    case SET_ACTIVE_SOURCE:
      return state.set("active", action.source);
    default:
      return state;
  }
}

