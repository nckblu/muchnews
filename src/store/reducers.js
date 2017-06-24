import { combineReducers } from "redux";
import locationReducer from "./location";
import articlesReducer from "reducers/articles";
import articleSourcesReducer from "reducers/articleSources";
import userReducer from "reducers/user";
import { routerReducer } from "react-router-redux";

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    articles: articlesReducer,
    articleSources: articleSourcesReducer,
    user: userReducer,
    routing: routerReducer,
    ...asyncReducers,
  });
};

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
