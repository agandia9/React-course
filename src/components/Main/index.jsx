import React, {Component} from 'react'
import MessageList from '../MessageList'
import InputText from '../InputText'
import ProfileBar from '../ProfileBar'

class Main extends Component {
	constructor(){
		super()
		this.state = {
			openText:false,
			messages: [{
				text: 'message default',
				picture: 'https://pbs.twimg.com/profile_images/799369354878062593/9Fxts0_p_400x400.jpg',
				displayName: 'Alejandro Delgado',
				username: 'alejan_gan',
				date: Date.now()-180000
			},
			{
				text: 'another message default',
				picture: 'https://pbs.twimg.com/profile_images/799369354878062593/9Fxts0_p_400x400.jpg',
				displayName: 'Alejandro Delgado',
				username: 'alejan_gan',
				date: Date.now()-380000
			}]
		}
	}

	handleOpenText(event){
		event.preventDefault()
		this.setState({openText:true})
	}

	renderOpenText(){
		if(this.state.openText){
			return <InputText />
		}
	}
	render(){
		return(
			<div>
				<ProfileBar
					picture={this.props.user.photoURL}
					userName={this.props.user.email.split('@')[0]}
					onOpenText={this.handleOpenText}
				/>
				{this.renderOpenText()}
				<MessageList messages={this.state.messages} />
			</div>
		)
	}
}

export default Main
