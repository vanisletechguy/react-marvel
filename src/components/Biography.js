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
				
				<h3>{this.current.name}</h3>
				{
					this.current.name?
							<div className="biowrapper bioDetails">
								<div className="col-md-6 portrait">
									<img className="" 
										src={this.current.thumbnail.path + 
											'.' + this.current.thumbnail.extension}
										alt='Marvel character portrait' />
								</div>
								<div className="col-md-6">
									<p className="">{this.current.description}</p>
								</div>
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
