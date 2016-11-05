import ApiService from "services/api/ApiService";

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_ARTICLESOURCES_REQUEST = 'FETCH_ARTICLESOURCES_REQUEST';
export const FETCH_ARTICLESOURCES = 'FETCH_ARTICLESOURCES';
export const FETCH_ARTICLESOURCES_SUCCESS = 'FETCH_ARTICLESOURCES_SUCCESS';
export const FETCH_ARTICLESOURCES_ERROR = 'FETCH_ARTICLESOURCES_ERROR';

// ------------------------------------
// Actions
// ------------------------------------
export function fetchArticleSourcesRequest (state) {
  return {
    type    : FETCH_ARTICLESOURCES_REQUEST,
  }
}

export function fetchArticleSources(sort) {
  return (dispatch, getState) => {
    dispatch(fetchArticleSourcesRequest());
    const apiService = new ApiService();
    apiService.fetchArticleSources(sort)
    .then(response => {
    	return dispatch(fetchArticleSourcesSuccess(response.data.sources));
    })
    .catch(e => {
    	return dispatch(fetchError());
    });
  }
}

export function fetchArticleSourcesSuccess (payload) {
	console.warn('SUCCESS')
  return {
    type : FETCH_ARTICLESOURCES_SUCCESS,
    payload,
  }
}

export function fetchArticleSourcesError (data) {
	return {
		type: FETCH_ARTICLESOURCES_ERROR,
	}
}