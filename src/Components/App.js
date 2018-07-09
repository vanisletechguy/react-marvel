import React, {Component} from 'react';
import {connect} from 'react-redux';


class App extends Component {
	render() {
		return(
			<div>
				<h1>Marvel Database Search Tool</h1>
				<h3>Input Field</h3>
				<h3>Search Results</h3>
				<div>
					{
						this.props.characters.slice(0, 10).map((character, index) => {
							
							console.log('sometext');
							return (
								<div>
									<h4>{character.name}</h4>
									<h4>{character.description}</h4>
								</div>							);
						})
					}
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps, null)(App);
