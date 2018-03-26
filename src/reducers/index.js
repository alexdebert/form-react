/**
 * @overview Main reducer.
 */

//Core
import { combineReducers } from 'redux'

//Reducers
import CountriesReducer from './countries'
import { reducer as FormReducer } from 'redux-form'

const rootReducer = combineReducers({
	form: FormReducer,
	countries: CountriesReducer
})

export default rootReducer