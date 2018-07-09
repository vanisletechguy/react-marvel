import React, {Component} from 'react';
import {connect} from 'react-redux';

class Character extends Component {

	render() {
		return(
			<div>{this.props.character.name}</div>		
		)
	}
}
export default Character;
