/**
 * @overview Message reducer.
 */

import { SHOW_MESSAGE } from '../actions/messageActions'

const initialState =  {
	data: null
}

export default function message(state = initialState, action) {
	switch (action.type) {
	case SHOW_MESSAGE:
		return {
			...state,
			data: action.data
		}
	default:
		return state
	}
}