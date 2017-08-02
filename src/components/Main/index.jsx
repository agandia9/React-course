import React, {Component} from 'react'
import MessageList from '../MessageList'

class Main extends Component{
	constructor(){
		super()
		this.state = {
			messages: [{
				text: 'message default',
				picture: 'https://pbs.twimg.com/profile_images/799369354878062593/9Fxts0_p_400x400.jpg',
				displayName: 'Alejandro Delgado',
				username: 'alejan_gan',
				date: Date.now()
			}]
		}
	}
	render(){
		return(
			<MessageList messages={this.state.messages} />
		)
	}
}

export default Main
