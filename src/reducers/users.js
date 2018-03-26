/**
 * @overview Users reducer.
 */

import { UPDATE_USERS } from '../actions/usersActions'

const initialState =  {
	data: []
}

export default function message(state = initialState, action) {
	switch (action.type) {
	case UPDATE_USERS:
		return {
			...state,
			data: action.data
		}
	default:
		return state
	}
}