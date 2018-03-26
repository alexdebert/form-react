import axios from 'axios'

export let getCountries = () => {
	return axios.get('https://restcountries.eu/rest/v2/all')
}