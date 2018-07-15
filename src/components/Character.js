import React from 'react';
import {Component} from 'react';
import {favoriteCharacter} from '../actions';
import {unfavoriteCharacter} from '../actions';
class Character extends Component {
	render() {
		return(
			<div>
				{this.props.character.name}
				{
					this.props.character.isFavorite?
						<span className="favBadge badge badge-primary badge-pill">FAV</span>
						:
						<span className="favBadge badge badge-secondary badge-pill">*</span>
				}
			</div>		
		);
	}
}
export default Character;
