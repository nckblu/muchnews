import { combineReducers } from 'redux';
import locationReducer from './location';
import articlesReducer from 'reducers/articles';
import articleSourcesReducer from 'reducers/articleSources';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    articles: articlesReducer,
    articleSources: articleSourcesReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
