/**
 * @overview Form component.
 */

//Core
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import { updateUsers } from '../../actions/usersActions'

//Styles
import './UserList.scss'

class UserList extends Component {

	render() {
		console.log(this.props.users)
		return (
			<div className="user-list-container">
				<p>User List</p>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		users: state.users.data
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		updateUsers
	}, dispatch)
}

UserList.propTypes = {
	updateUsers: PropTypes.func.isRequired,
	users: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)