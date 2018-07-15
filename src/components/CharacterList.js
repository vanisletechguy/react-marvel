import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {setSelectedCharacter} from '../actions';
import {clearCharacters} from '../actions';
import Character from './Character';
import {favoriteCharacter} from '../actions';
import {unfavoriteCharacter} from '../actions';
const SHOW_ALL = 'SHOW_ALL';
const SHOW_FAVORITES = 'SHOW_FAVORITES';

class CharacterList extends Component {
	constructor(props){
		super(props);
		this.selectCharacterAlert = this.props.selectCharacterAlert;

		var showState = SHOW_ALL;
		this.showState = showState;
		var listData = this.props.characters[0];
		this.listData = listData;
	}
	setListData(){
		if(this.showState === SHOW_ALL){this.listData = this.props.characters[0];}
		else if(this.showState === SHOW_FAVORITES && this.props.favorites[0]) {this.listData = this.props.favorites;}
		else{this.listData = [];}
		if(this.props.favorites[0]){
			this.props.favorites.map((fav) => {
				if(this.listData && this.listData[0]){
					this.listData.map((character) => {
						if(character == fav){
							character.isFavorite = true;
						}	
					});
				}
			});
		}
	}
	showAll(){
		this.showState = SHOW_ALL;
		this.listData = this.props.characters[0];
		this.setListData();
		this.forceUpdate();
	}
	showFavorites(){
		this.showState = SHOW_FAVORITES;
		this.setListData();
		this.forceUpdate();
	}
	selectCharacter(e,character){
		if(this.currentlySelectedCharacter){
			this.currentlySelectedCharacter.style = 'background-color: #FFFFFF;';
		}
		this.selectedCharacter = character;
		this.props.setSelectedCharacter(character);
		let unFav = this.props.unfavoriteCharacter;
		if(e.target.tagName === 'SPAN') {
			character.isFavorite ?
				(
					unFav(character),
					//this.props.unfavoriteCharacter(character)
					character.isFavorite = false
				)
				:
				this.props.favoriteCharacter(character);
		}
		this.currentlySelectedCharacter = e.target.closest('li');
		this.currentlySelectedCharacter.style = 'background-color: #FFFF00;';	

		this.forceUpdate();
	}
	componentDidMount(){
		this.setListData();
	}
	render() {
		if(this.props.characters) { ///should do once only
			this.setListData();
		}
		if(!this.listData){
			return(<div>Loading Characters...</div>);
		}
		return( 
			<div>
				<h3>Characters</h3>
				<div id="exTab1">	
					<ul  className="nav nav-pills">
						<li className="active">
							<a onClick={() => this.showAll()} data-toggle="tab">Characters</a>
						</li>
						<li className="active">
							<a onClick={() => this.showFavorites()} data-toggle="tab">Favorites</a>
						</li>
					</ul>
					<div className="tab-content clearfix">
						<div className="tab-pane active" id="1a">
							<div className="card-wrapper">
								<div>
									<ul className="list-group scroll-characters">
										{
											this.listData.map(character => {
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
						<div className="tab-pane" id="2a">
							<div className="card-wrapper">
								<div>
									<ul className="list-group scroll-characters">
										{
											this.listData.map(character => {
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
					</div>
				</div>
			</div>
		);
	}
}
function mapStateToProps(state){
	return {
		characters: state.characters,
		favorites: state.favorite
	};
}
export default connect(mapStateToProps, {setSelectedCharacter, clearCharacters, favoriteCharacter, unfavoriteCharacter})(CharacterList);
