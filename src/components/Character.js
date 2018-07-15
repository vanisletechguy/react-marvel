import React from 'react';
import {Component} from 'react';
import {favoriteCharacter} from '../actions';

class Character extends Component {

	addFav(character){
		//calldispatch
		console.log('chars props char', character);
		favoriteCharacter(character);
	}
	render() {
		return(
			<div>
				{this.props.character.name}
				{
					this.props.character.isFavorite?
						<span onClick={()=>this.addFav(this.props.character)} className="favBadge badge badge-primary badge-pill">FAV</span>
						:
						<span onClick={()=>this.addFav(this.props.character)} className="favBadge badge badge-secondary badge-pill">*</span>
				}
			</div>		
		);
	}
}
export default Character;
