/**
 * @overview Main reducer.
 */

//Core
import { combineReducers } from 'redux'

//Reducers
import CountriesReducer from './countries'
import MessageReducer from './message'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
	form: FormReducer,
	countries: CountriesReducer,
	message: MessageReducer
})

export default rootReducer