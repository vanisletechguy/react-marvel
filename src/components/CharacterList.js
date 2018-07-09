import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
//import addCharacterById from '../actions';
import Character from './Character';

class CharacterList extends Component {

	render() {
		return(
			<div>
				<h3>Characters</h3>
				<ul>
					{
						this.props.characters.map(character => {
							return(
								<li key={character.id}>
									<Character
										key={character.id}
										character={character}
									/>
								</li>
							)
						}
					)}
				</ul>
			</div>
		)
	}
}
function mapStateToProps(state){
	return {
		characters: state.characters
	};
}
export default connect(mapStateToProps, null)(CharacterList)
