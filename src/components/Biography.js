import React, {Component} from 'react';
import {connect} from 'react-redux';

class Biography extends Component {
	constructor(props){
		super(props);
	}
	render() {
	if(this.props.selectedCharacter[1]){
		this.current = this.props.selectedCharacter[1];
		console.log('thumb:', this.current.thumbnail);
	}
		return(
			<div>
				{
					this.current ?
						<div className="card">
							<h2 className="card-title">{this.current.name}</h2>
							<p className="card-text">{this.current.description}</p>
							<img className="thumbnail" src={this.current.thumbnail.path + "." + this.current.thumbnail.extension}/>
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
		selectedCharacter: state.characters
	};
}
export default connect(mapStateToProps, null)(Biography);
