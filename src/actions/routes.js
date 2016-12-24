import { push } from 'react-router-redux';

// ------------------------------------
// Actions
// ------------------------------------
export function goToNews() {
  return dispatch => dispatch(push("/news"));
}

