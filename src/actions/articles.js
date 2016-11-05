// ------------------------------------
// Constants
// ------------------------------------
export const FETCH_POPULAR_REQUEST = 'FETCH_POPULAR_REQUEST';
export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_POPULAR_SUCCESS = 'FETCH_POPULAR_SUCCESS';

// ------------------------------------
// Actions
// ------------------------------------
export function fetchPopularRequest (state) {
  return {
    type    : FETCH_POPULAR_REQUEST,
  }
}

export function fetchPopular (state) {
  return {
    type    : FETCH_POPULAR,
  }
}

export function fetchPopularSuccess (state) {
  return {
    type    : FETCH_POPULAR_SUCCESS,
  }
}