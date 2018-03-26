/**
 * @overview Countries actions.
 */

export const GET_COUNTRIES = 'GET_COUNTRIES'

import * as countriesApi from '../api/countries'

export const getCountries = () => {
	return function(dispatch) {
		countriesApi.getCountries().then(response => {
			dispatch({
				type: GET_COUNTRIES,
				payload: response
			})
		})
	}
}