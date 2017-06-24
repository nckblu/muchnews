import { fromJS } from "immutable";
import {
  FETCH_ARTICLES_BY_SOURCE_REQUEST,
  FETCH_ARTICLES_BY_SOURCE_SUCCESS,
  FETCH_ARTICLES_ERROR,
} from "actions/articles";

const initialState = fromJS({
  items: [],
});

export default function articlesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_BY_SOURCE_REQUEST:
      return state.set("working", true);

    case FETCH_ARTICLES_BY_SOURCE_SUCCESS:
      return state.set("items", fromJS(action.payload))
                  .set("working", false);

    case FETCH_ARTICLES_ERROR:
      return state.set("working", false);

    default:
      return state;
  }
}
