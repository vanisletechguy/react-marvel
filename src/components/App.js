import React, {Component} from 'react';
import {connect} from 'react-redux';
import CharacterList from './CharacterList';
import Biography from './Biography';
import FilterByLetter from './FilterByLetter';
//import {fetchCharacters} from '../actions';

class App extends Component {
//	constructor(props){
//		super(props);
//	}	
	
	render() {
		return(
			<div className="App">
				<h1>Marvel Character Database</h1>
				<div>
					<h3>Input Field</h3>
					<FilterByLetter />
				</div>
			
				<div className="col-md-4">
					<CharacterList />
				</div>
				<div className="col-md-4">
					<h3>Biography</h3>
					<Biography />
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps, null)(App);
