import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

class Biography extends Component {
	render() {
		if(this.props.selectedCharacter){
			this.current = this.props.selectedCharacter;
		}
		return(
			<div>
				{
					this.current.name?
						<div className="card">
							<h3>{this.current.name}</h3>
							<p className="card-text">{this.current.description}</p>
							<img className="thumbnail" 
								src={this.current.thumbnail.path + 
									'.' + this.current.thumbnail.extension}
								alt='Marvel character portrait' />
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
		selectedCharacter: state.selected
	};
}
export default connect(mapStateToProps, null)(Biography);
