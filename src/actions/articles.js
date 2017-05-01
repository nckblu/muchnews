import ApiService from 'services/api/ApiService'

// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_POPULAR_REQUEST = 'FETCH_POPULAR_REQUEST'
export const FETCH_POPULAR = 'FETCH_POPULAR'
export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'

// ------------------------------------
// Actions
// ------------------------------------
export function fetchPopularRequest (state) {
  return {
    type: FETCH_POPULAR_REQUEST
  }
}

export function fetchPopular (sourceId) {
  return (dispatch, getState) => {
    dispatch(fetchPopularRequest())
    const apiService = new ApiService()
    apiService.fetchPopular(sourceId)
    .then(response => {
    	return dispatch(fetchPopularSuccess(response.data.articles))
    })
    .catch(e => {
    	return dispatch(fetchError())
    })
  }
}

export function fetchPopularSuccess (payload) {
  console.warn('SUCCESS')
  return {
    type : FETCH_POPULAR_SUCCESS,
    payload
  }
}

export function fetchError (data) {
  return {
    type: FETCH_ERROR
  }
}
