/**
 * @overview Storage.
 */

import { createStore, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/index'

export function configureStore(initialState) {
	const store = createStore(
		rootReducer,
		initialState,
		compose (
			applyMiddleware(reduxThunk)
		)
	)

	return store
}