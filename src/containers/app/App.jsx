/**
 * @overview App Container.
 */

//Core
import React from 'react'

//Component
import Form from '../form/Form'
import UserList from '../userList/UserList'
import Message from '../message/Message'

//Styles
import './App.scss'

const App = () => (
	<div>
		<div className="app-container">
			<div className="info-container">
				<h1>Ejercicio Intive</h1>
				<p>Nombre: Alexandre Debert</p>
			</div>
			<div className="components-container">
				<Form />
				<UserList />
			</div>
			<Message />
		</div>
	</div>
)

export default App