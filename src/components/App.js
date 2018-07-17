import React from 'react';
import FilterByLetter from './FilterByLetter';
import CharacterList from './CharacterList';
import {Component} from 'react';
import {connect} from 'react-redux';
import Biography from './Biography';

class App extends Component {
	render() {
		return(
			<div className="App col-md-12">
				<h1 className="app-title well well-sm">Marvel Character Database</h1>
				<div className="alpha-search">
					<FilterByLetter />
				</div>
				<div className="col-md-1"></div>	
				<div className="col-md-4 well well-sm">
					<CharacterList />
				</div>
				<div className="col-md-1"></div>
				<div className="col-md-5 well well-sm biography">
					<Biography />
				</div>
				<div className="col-md-1"></div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return state;
}

export default connect(mapStateToProps, null)(App);
