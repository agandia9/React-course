import React, { Component } from 'react'
import 'normalize-css'

import styles from './app.css'
import Header from "../Header"
import Main from "../Main"

class App extends Component {
	constructor(){
		super()
		this.state = {
			user:{
				photoURL:"https://pbs.twimg.com/profile_images/799369354878062593/9Fxts0_p_400x400.jpg",
				email:'alejan_gan@gmail.com',
				onOpenText: false
			}
		}
	}
	render(){
		return(
			<div>
				<Header />
				<Main user={this.state.user}/>
			</div>
		)
	}
}

export default App
