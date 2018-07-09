import React, {Component} from 'react';
import {connect} from 'react-redux';
import CharacterList from './CharacterList';
import FilterByLetter from './FilterByLetter';
import {fetchCharacters} from '../actions';

class App extends Component {
	constructor(props){
		super(props);
	}	
	
	render() {
		return(
			<div>
				<h1>Marvel Database Search Tool</h1>
				<h3>Input Field</h3>
				<FilterByLetter />
				<h3>Search Results</h3>
				<div>
					<CharacterList />
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps, null)(App);
