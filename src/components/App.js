import React, {Component} from 'react';
import {connect} from 'react-redux';
import CharacterList from './CharacterList';
import Biography from './Biography';
import FilterByLetter from './FilterByLetter';

class App extends Component {
	render() {
		return(
			<div className="App col-md-12">
				<h1>Marvel Character Database</h1>
				<div className="alpha-search">
					<FilterByLetter />
				</div>
				<div className="col-md-1"></div>	
				<div className="col-md-4 well well-sm">
					<CharacterList />
				</div>
				<div className="col-md-2"></div>
				<div className="col-md-4 well well-sm">
					<h3>Biography</h3>
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
