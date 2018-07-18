import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../styles/index.css';
import {fetchCharacters} from '../actions';
import {clearCharacters} from '../actions';

class FilterByLetter extends Component {
	constructor(props){
		super(props);
		this.handleFilterChange = this.handleFilterChange.bind(this);
		this.alphabet = ['a','b','c','d','e','f','g','h','i','j','k',
			'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	}
	handleFilterChange(letter){
		this.changeLetter(letter);
	}
	changeLetter(letter) {
		this.props.clearCharacters();
		this.props.newLetter(letter);
	}
	render() {
		return (
			<div className="alphabetLinks">
				{
					this.alphabet.map((letter) => {
						return(
							<a className="letter btn btn-primary"
								key={letter}
								onClick={() => {
									this.handleFilterChange(letter);
								}}
							>
								{letter.toUpperCase()}
							</a>
						);
					})
				}
			</div>
		); 
	}
}
function mapStateToProps(state) {
	return state;
}
function mapDispatchToProps(dispatch){
	return ({
		newLetter: (letter) => {dispatch(fetchCharacters(letter));},
		clearCharacters: () => {dispatch(clearCharacters());}
	});
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterByLetter);
