import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {setSelectedCharacter} from '../actions';
import Character from './Character';

class CharacterList extends Component {
	constructor(props){
		super(props);
		this.selectCharacterAlert = this.props.selectCharacterAlert;
		this.currentlySelectedCharacter = this.props.selectedCharacter;
	}
	selectCharacter(e,character){
		if(this.currentlySelectedCharacter){
			this.currentlySelectedCharacter.style = 'background-color: #FFFFFF;';
		}
		this.selectedCharacter = character;
		this.props.setSelectedCharacter(character);
		this.currentlySelectedCharacter = e.target;
		this.currentlySelectedCharacter.style = 'background-color: #FFFF00;';	
	}
	render() {
		if(!this.props.characters[0]){
			return(<div>nothing here</div>);
		}
		return( 
			<div> 
				<h3>Characters</h3>
				<div className="card-wrapper">
					<div>
						<ul className="list-group scroll-characters">
							{
								this.props.characters[0].map(character => {
									return(
										<li 
											key={character.id} 
											data-id={character.id}
											className="list-group-item"
											onClick={(e) => this.selectCharacter(e,character)}
										>
											<Character
												key={character.id}
												character={character}
											/>
										</li>
									);
								})
							}
						</ul>
			
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		characters: state.characters
	};
}
export default connect(mapStateToProps, {setSelectedCharacter})(CharacterList);
