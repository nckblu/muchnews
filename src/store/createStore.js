import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { browserHistory } from "react-router";
import makeRootReducer from "./reducers";
import { updateLocation } from "./location";
import { persistStore, autoRehydrate } from "redux-persist";
import immutableTransform from "redux-persist-transform-immutable";
import { syncHistoryWithStore, routerMiddleware, push } from "react-router-redux";
import persistTransform from "helpers/persistTransform";

export default (initialState = {}) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [thunk, routerMiddleware(browserHistory)];

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === "function") {
      enhancers.push(devToolsExtension());
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      autoRehydrate(),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  return new Promise(resolve => {
    syncHistoryWithStore(browserHistory, store);

    // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
    store.unsubscribeHistory = browserHistory.listen(updateLocation(store));

    if (module.hot) {
      module.hot.accept("./reducers", () => {
        const reducers = require("./reducers").default;
        store.replaceReducer(reducers(store.asyncReducers));
      });
    }

    persistStore(store, {
      transforms: [persistTransform()],
      whitelist: ["user"],
      keyPrefix: "muchnews",
    }, () => resolve(store));
  });
};
