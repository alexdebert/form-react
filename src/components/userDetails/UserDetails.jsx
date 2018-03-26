/**
 * @overview User details component.
 */

//React
import React from 'react'
import PropTypes from 'prop-types'

const UserDetails = props => {
	return (
		<p  onClick={() => props.onUserSelected(props)}>{props.name} - {props.country} - {props.birthday}</p>
	)
}

UserDetails.propTypes = {
	name: PropTypes.string.isRequired,
	birthday: PropTypes.string.isRequired,
	country: PropTypes.string.isRequired,
	onUserSelected: PropTypes.func.isRequired
}

export default UserDetails