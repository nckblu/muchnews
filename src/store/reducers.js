import { combineReducers } from 'redux';
import locationReducer from './location';
import articlesReducer from 'reducers/articles';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    articles: articlesReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
