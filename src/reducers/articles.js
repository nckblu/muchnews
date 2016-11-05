import ApiService from 'services/api/ApiService';

import {
	FETCH_POPULAR_REQUEST,
	FETCH_POPULAR,
	FETCH_POPULAR_SUCCESS,
} from "actions/articles";

const initialState = {
	items: [],
}
export default function articlesReducer (state = initialState, action) {
  	switch (action.type) {
  		default:
  		const apiService = new ApiService();
  		return state;
	}
}
