import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import {fetchCharacters} from '../actions';


class FilterByLetter extends Component {
	constructor(props){
		super(props);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		
		
	}
	handleFilterChange(letter){
		this.changeLetter(letter);
	}
	changeLetter = (letter) => {
			this.props.newLetter(letter);
		}
	render() {
		return (
		<div className="alphabetLinks">
			<a className="letter" onClick={() => this.handleFilterChange('a')}>A</a>
			<a className="letter" onClick={() => this.handleFilterChange('b')}>B</a>
			<a className="letter" onClick={() => this.handleFilterChange('c')}>C</a>
			<a className="letter" onClick={() => this.handleFilterChange('d')}>D</a>
			<a className="letter" onClick={() => this.handleFilterChange('e')}>E</a>
			<a className="letter" onClick={() => this.handleFilterChange('f')}>F</a>
			<a className="letter" onClick={() => this.handleFilterChange('g')}>G</a>
			<a className="letter" onClick={() => this.handleFilterChange('h')}>H</a>
			<a className="letter" onClick={() => this.handleFilterChange('i')}>I</a>
			<a className="letter" onClick={() => this.handleFilterChange('j')}>J</a>
			<a className="letter" onClick={() => this.handleFilterChange('k')}>K</a>
			<a className="letter" onClick={() => this.handleFilterChange('l')}>L</a>
			<a className="letter" onClick={() => this.handleFilterChange('m')}>M</a>
			<a className="letter" onClick={() => this.handleFilterChange('n')}>N</a>
			<a className="letter" onClick={() => this.handleFilterChange('o')}>O</a>
			<a className="letter" onClick={() => this.handleFilterChange('p')}>P</a>
			<a className="letter" onClick={() => this.handleFilterChange('q')}>Q</a>
			<a className="letter" onClick={() => this.handleFilterChange('r')}>R</a>
			<a className="letter" onClick={() => this.handleFilterChange('s')}>S</a>
			<a className="letter" onClick={() => this.handleFilterChange('t')}>T</a>
			<a className="letter" onClick={() => this.handleFilterChange('u')}>U</a>
			<a className="letter" onClick={() => this.handleFilterChange('v')}>V</a>
			<a className="letter" onClick={() => this.handleFilterChange('w')}>W</a>
			<a className="letter" onClick={() => this.handleFilterChange('x')}>X</a>
			<a className="letter" onClick={() => this.handleFilterChange('y')}>Y</a>
			<a className="letter" onClick={() => this.handleFilterChange('z')}>Z</a>
		</div>

		) 
	}
}
function mapStateToProps(state) {
	return state;
}
function mapDispatchToProps(dispatch){
	return ({
		newLetter: (letter) => {dispatch(fetchCharacters(letter))}
	})
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterByLetter);
