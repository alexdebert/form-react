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

//Styles
import './Form.scss'

const validate = values => {
	//TODO: fix regex date
	const errors = {}
	const regDate = /^(0?[1-9]|[12][0-9]|3[01])([/](0?[1-9]|1[012])[/](19|20)?[0-9]{2})*$/

	if (!values.birthday) {
		errors.birthday = "Please enter your birthday."
	} else if (!regDate.test(values.birthday)) {
		errors.email = "Invalid date"
	}

	if (!values.name) {
		errors.name = "Please enter your name."
	}

	return errors
}

class Form extends Component {
	componentDidMount() {
		this.props.getCountries()
	}

	handleFormSubmit = (values) => {
		this.props.showMessage(values)
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

	renderSelectField(field) {
		//TODO: check console error due to defaultValue
		const contriesList = field.options.map(country => {
			return (
				<option value={country.name} key={country.alpha3Code}>{country.name}</option>
			)
		})

		return(
			<div className="form-group">
				<label className="control-label">{field.label}</label>
				<select {...field.input} defaultValue="" className="form-control">
					<option value="" disabled>Paises</option>
					{contriesList}
				</select>
			</div>
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
		showMessage
	}, dispatch)
}

Form.propTypes = {
	getCountries: PropTypes.func.isRequired,
	showMessage: PropTypes.func.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	countries: PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
	form: 'nameForm',
	validate
})(Form))