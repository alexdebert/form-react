/**
 * @overview Form component.
 */

//Core
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

//Actions
import { showMessage } from '../../actions/messageActions'

//Styles
import './Message.scss'

class Message extends Component {
	componentDidMount() {
		this.props.showMessage()
	}

	getAge(year) {
		let today = new Date(),
			currentYear = today.getFullYear()

		return currentYear - year
	}

	render() {
		const messageData = this.props.message

		if(messageData) {
			let name = messageData.name,
				country = messageData.country,
				day = messageData.birthday.split('/')[0],
				month = messageData.birthday.split('/')[1],
				age = this.getAge(messageData.birthday.split('/')[2])

			return (
				<div className="message-container">
					<p>Hola {name} de {country}. El dia {day} del {month} tendrás {age}</p>
				</div>
			)
		}

		return <div></div>
	}
}

const mapStateToProps = state => {
	//TODO: Check why message comes undefined
	return {
		message: state.message.data
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		showMessage
	}, dispatch)
}

Message.propTypes = {
	showMessage: PropTypes.func.isRequired,
	message: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)