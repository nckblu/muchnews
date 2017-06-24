import { fromJS } from "immutable";

const initialState = fromJS({
  articleSources: {},
  articles: {},
});

export default function entitiesReducer(state = initialState, action) {
  if (action.entities) {
    return state.mergeDeep(fromJS(action.entities));
  }
  return state;
}
