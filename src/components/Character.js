import React from 'react';
import {Component} from 'react';

class Character extends Component {

	render() {
		return(
			<div>{this.props.character.name}</div>		
		);
	}
}
export default Character;
