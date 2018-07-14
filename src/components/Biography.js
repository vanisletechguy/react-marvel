import React, {Component} from 'react';
import {connect} from 'react-redux';

class Biography extends Component {
	constructor(props){
		super(props);
	//	const selectedCharacter = this.props;
	//	console.log('1st', selectedCharacter);
		//console.log('2nd', state.selectedCharacter);
		this.current = this.props;
		console.log('abcdc', this.current);
	}
	render() {
	
	console.log('ssssss', this.props);
		console.log('1111st', this.props.selectedCharacter);

		return(
			<div>
				<h2>BioInfo</h2>
				{
					
					this.props.selectedCharacter ?
						<h4>{this.props.selectedCharacter.characters[1].name}</h4>
					:
						<h4>waiting...</h4>
				}
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
//		selectedCharacter: state.selectedCharacter
		selectedCharacter: state.selectedCharacter
	};
}
export default connect(mapStateToProps, null)(Biography);
