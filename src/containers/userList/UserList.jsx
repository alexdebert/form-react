/**
 * @overview User List component.
 */

//Core
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import { updateUsers } from '../../actions/usersActions'
import { showMessage } from '../../actions/messageActions'

//Components
import UserDetails from '../../components/userDetails/UserDetails'

//Styles
import './UserList.scss'

class UserList extends Component {

	idGenerator() {
		console.log(Math.random().toString(36).substr(2, 9))
		return Math.random().toString(36).substr(2, 9)
	}

	render() {
		const users = this.props.users
		return (
			<div className="user-list-container">
				<p>Vistantes Anteriores</p>
				{users.map((user, index) =>
					<UserDetails key = {index}
						name = {user.name}
						country = {user.country}
						birthday = {user.birthday} 
						onUserSelected={ userSelected => this.props.showMessage(userSelected)} />
				)}
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
		updateUsers,
		showMessage
	}, dispatch)
}

UserList.propTypes = {
	updateUsers: PropTypes.func.isRequired,
	showMessage: PropTypes.func.isRequired,
	users: PropTypes.array
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList)