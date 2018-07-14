import React, {Component} from 'react';
import {connect} from 'react-redux';

class Biography extends Component {
	constructor(props){
		super(props);
		this.current = this.props['selectedCharacter'];
	}
	render() {
	if(this.props.selectedCharacter.characters[1]){
		this.current = this.props.selectedCharacter.characters[1];
	}
		return(
			<div>
				{
					this.current ?
						<div>
							<h2>{this.current.name}</h2>
							<p>{this.current.description}</p>
						</div>
					:
						<h4>select a character from the list...</h4>
				}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		selectedCharacter: state
	};
}
export default connect(mapStateToProps, null)(Biography);
