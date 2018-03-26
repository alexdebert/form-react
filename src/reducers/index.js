/**
 * @overview Main reducer.
 */

//Core
import { combineReducers } from 'redux'

//Reducers
import CountriesReducer from './countries'
import MessageReducer from './message'
import UsersReducer from './users'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
	form: FormReducer,
	countries: CountriesReducer,
	message: MessageReducer,
	users: UsersReducer
})

export default rootReducer