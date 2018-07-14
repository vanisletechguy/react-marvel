import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import addCharacterById from '../actions';
import Character from './Character';
import {setSelectedCharacter} from '../actions';

class CharacterList extends Component {
	constructor(props){
		super(props);
		this.selectCharacterAlert = this.props.selectCharacterAlert;
	}
	selectCharacter(character){
		this.selectedCharacter = character;
		this.props.setSelectedCharacter(character);
	}
	render() {
		var currentlySelectedCharacter = this.props.selectedCharacter;
		if(!this.props.characters[0]){
			return(<div>nothing here</div>);
		}
	return( 
	<div> 
		<h3>Characters</h3>
				<ul className="list-group">
					{
						this.props.characters[0].map(character => {
							return(
								<li 
									key={character.id} 
									className="list-group-item"
									onClick={() => this.selectCharacter(character)}
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
	};
}
export default connect(mapStateToProps, {setSelectedCharacter})(CharacterList)
