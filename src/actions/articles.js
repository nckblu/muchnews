import ApiService from "services/api/ApiService";

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ARTICLES_BY_SOURCE_REQUEST = "FETCH_ARTICLES_BY_SOURCE_REQUEST";
export const FETCH_ARTICLES_BY_SOURCE_SUCCESS = "FETCH_ARTICLES_BY_SOURCE_SUCCESS";
export const FETCH_ARTICLES_ERROR = "FETCH_ERROR";

// ------------------------------------
// Actions
// ------------------------------------
export function fetchArticlesBySource(sourceId) {
  return (dispatch, getState) => {
    dispatch({ type: FETCH_ARTICLES_BY_SOURCE_REQUEST });
    const apiService = new ApiService();
    return apiService.articles().fetchBySource(sourceId)
    .then(response => {
      return dispatch(fetchArticlesBySourceSuccess(response.data.articles));
    })
    .catch(e => {
      return dispatch(fetchError(e));
    });
  };
}

export function fetchArticlesBySourceSuccess(payload) {
  return {
    type : FETCH_ARTICLES_BY_SOURCE_SUCCESS,
    payload,
  };
}

export function fetchError(e) {
  console.log("error", e);
  return {
    type: FETCH_ARTICLES_ERROR,
  };
}

export default {
  fetchArticlesBySource,
};
