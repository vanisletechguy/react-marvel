import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import addCharacterById from '../actions';
import Character from './Character';
import {setSelectedCharacter} from '../actions';

class CharacterList extends Component {
	constructor(props){
		super(props);

		//this.selectedCharacter = this.props.characters.first;
		this.selectCharacterAlert = this.props.selectCharacterAlert;
	}
	selectCharacter(character){
		this.selectedCharacter = character;
		console.log('character:', this.selectedCharacter.name);
		this.selectCharacterAlert(character);
	}
	render() {
		var currentlySelectedCharacter = this.props.selectedCharacter;
		console.log('allChars!!', this.props.characters);
		//var allCharacters = [...this.props.characters];


		if(!this.props.characters>0){ console.log('was not greater than 0');
			console.log('some props', this.props.characters[0]);
			return(<div>nothing</div>);
		}

		
	console.log('myprops: ', this.props)
	return( 
	<div> 
		<h3>Characters</h3>
				<ul className="list-group">
					{
						this.props.characters[0].map(character => {
							//console.log('char123', character);
							return(
								<li 
									key={character.id} 
									className="list-group-item"
									onClick={() => this.props.setSelectedCharacter(character)}
								>
									<Character
										key={character.id}
										character={character}
									/>
								</li>
							)
						})
					}
				</ul>
			</div>
		);





	}
}
function mapStateToProps(state){
	return {
		characters: state.characters
	//	selectedCharacter: state.selectedCharacter
	};
}
//	function mapDispatchToProps(dispatch){
//		return({
//			selectCharacterAlert: () => {dispatch(setSelectedCharacter)}
//		})
//	}
export default connect(mapStateToProps, {setSelectedCharacter})(CharacterList)
