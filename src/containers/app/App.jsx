/**
 * @overview App Container.
 */

//Core
import React from 'react'

//Component
import Form from '../form/Form'
import Message from '../message/Message'

//Styles
import './app.scss'

const App = () => (
	<div>
		<div className="app-container">
			<div className="info-container">
				<h1>Ejercicio Intive</h1>
				<p>Nombre: Alexandre Debert</p>
			</div>
			<Form />
			<Message />
		</div>
	</div>
)

export default App