/**
 * @overview Country reducer.
 */

import { GET_COUNTRIES } from '../actions/countriesActions'

const initialState =  {
	data: []
}

export default function countries(state = initialState, action) {
	switch (action.type) {
	case GET_COUNTRIES:
		return {
			...state,
			data: action.payload.data
		}
	default:
		return state
	}
}