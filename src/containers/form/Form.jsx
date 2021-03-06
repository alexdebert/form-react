/**
 * @overview Form component.
 */

//Core
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'

//Actions
import { getCountries } from '../../actions/countriesActions'
import { showMessage } from '../../actions/messageActions'
import { updateUsers } from '../../actions/usersActions'

//Styles
import './Form.scss'

const validate = values => {
	const errors = {},
		regDate = /^(0?[1-9]|[12][0-9]|3[01])([/](0?[1-9]|1[012])[/](19|20)?[0-9]{2})*$/

	let today = new Date(),
		todayTime = today.getTime(),
		birthdayTime = new Date(values.birthday).getTime()

	if (!values.birthday) {
		errors.birthday = "Please enter your birthday."
	} else if (!regDate.test(values.birthday) || birthdayTime >= todayTime) {
		errors.birthday = "Invalid date"
	}

	if (!values.name) {
		errors.name = "Please enter your name."
	}

	if (!values.country) {
		errors.country = "Please select a country."
	}

	return errors
}

class Form extends Component {
	constructor() {
		super()
		this.state = {
			users: []
		}
	}

	componentDidMount() {
		this.props.getCountries()
	}

	handleFormSubmit = (values) => {
		this.updateUserValues(values)
		this.props.showMessage(values)
	}

	updateUserValues(user) {
		this.setState({
			users: [...this.state.users, user]
		}, () => {
			this.props.updateUsers(this.state.users)
		})
	}

	renderField = ({ input, label, type, birthdayText, meta: { touched, error } }) => (
		<fieldset className={`form-group ${touched && error ? "has-error" : ""}`}>
			<label className="control-label">{label} :</label>
			<div className="control-label">{birthdayText}</div>
			<div>
				<input {...input} className="form-control" type={type} />
				{touched && error && <div className="help-block">{error}</div>}
			</div>
		</fieldset>
	)

	renderSelectField({options, input, label,  meta: { touched, error }}) {
		const contriesList = options.map(country => {
			return (
				<option value={country.name} key={country.alpha3Code}>{country.name}</option>
			)
		})

		return(
			<fieldset className={`form-group ${touched && error ? "has-error" : ""}`}>
				<label className="control-label">{label} :</label>
				<select {...input} className="form-control">
					<option value="" disabled>Paises</option>
					{contriesList}
				</select>
				{touched && error && <div className="help-block">{error}</div>}
			</fieldset>
		)
	}

	render() {
		return (
			<div className="form-container">
				<form onSubmit={this.props.handleSubmit(this.handleFormSubmit)}>
					<Field name="name"
						component={this.renderField}
						className="form-control"
						type="text"
						label="Nombre"/>
					<Field label="Pais"
						name="country"
						options={this.props.countries}
						component={this.renderSelectField} />
					<Field
						name="birthday"
						component={this.renderField}
						className="form-control"
						type="text"
						label="Cumpleaños"
						birthdayText="(dd/mm/yyyy)"/>
					<button action="submit" className="btn btn-primary">Saludar</button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		countries: state.countries.data
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({
		getCountries,
		showMessage,
		updateUsers
	}, dispatch)
}

Form.propTypes = {
	getCountries: PropTypes.func.isRequired,
	showMessage: PropTypes.func.isRequired,
	updateUsers: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	countries: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: 'nameForm',
	validate
})(Form))