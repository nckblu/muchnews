import ApiService from "services/api/ApiService";
import { articleSource as articleSourceSchema } from "schemas";
import { normalize } from "normalizr";

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ARTICLESOURCES_REQUEST = "FETCH_ARTICLESOURCES_REQUEST";
export const FETCH_ARTICLESOURCES_SUCCESS = "FETCH_ARTICLESOURCES_SUCCESS";
export const FETCH_ARTICLESOURCES_FAIL = "FETCH_ARTICLESOURCES_FAIL";

export const SET_ACTIVE_SOURCE = "SET_ACTIVE_SOURCE";

// ------------------------------------
// Actions
// ------------------------------------
export function fetchArticleSources() {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_ARTICLESOURCES_REQUEST });
    const apiService = new ApiService();
    apiService.fetchArticleSources()
    .then(response => {
      return dispatch(fetchArticleSourcesSuccess(response.data.sources));
    })
    .catch(e => {
      return dispatch({ type: FETCH_ARTICLESOURCES_FAIL });
    });
  };
}

export function fetchArticleSourcesSuccess(payload) {
  return {
    type : FETCH_ARTICLESOURCES_SUCCESS,
    payload,
  };
}

export function setActiveSource(source) {
  return {
    type: SET_ACTIVE_SOURCE,
    source,
  };
}

export default {
  fetchArticleSources,
  setActiveSource,
};
