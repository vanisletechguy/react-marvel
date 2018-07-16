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
		this.showState = SHOW_ALL;
		this.listData = this.props.characters[0];
		this.loading = true;
	}
	setListData(){
		if(this.showState === SHOW_ALL && !this.listData){
			this.listData = this.props.characters[0];
		}
		else if(this.showState === SHOW_FAVORITES ) {
			this.listData = this.props.favorites;
		}
		else if(!this.listData){this.listData = [];}
	}
	showAll(){
		this.showState = SHOW_ALL;
		this.listData = this.props.characters[0];
		this.setListData();
		this.forceUpdate();
	}
	showFavorites(){
		this.showState = SHOW_FAVORITES;
		this.listData = this.props.favorites;
		this.setListData();
		this.forceUpdate();
	}
	selectCharacter(e,character){
		if(this.currentlySelectedCharacter){
			this.currentlySelectedCharacter.style = 'background-color: #FFFFFF;';
		}
		if(e.target.tagName === 'SPAN') {
			character.isFavorite ?
				this.props.unfavoriteCharacter(character)
				:
				this.props.favoriteCharacter(character);
		}
		this.currentlySelectedCharacter = e.target.closest('li');
		this.currentlySelectedCharacter.style = 'background-color: #FFFF00;';	
		this.props.setSelectedCharacter(character);
	}
	componentWillReceiveProps(){
		this.setListData();
		this.forceUpdate();
	}
	checkData(){
		if(this.props.characters[0] && (!this.listData || !this.listData[0])) {
			this.setListData();
		}
		if(this.listData && this.listData[0] && this.props.favorites && this.props.favorites[0] && this.props.favorites.length !== this.listData.length && this.showState === 'SHOW_FAVORITES'){
			this.setListData();
		}
		if(this.showState === 'SHOW_FAVORITES' && !this.props.favorites[0]){
			this.setListData();
		}
	}
	checkLoading(){
		this.loading = false;
		if(!this.props.characters[0] || !this.listData ){
			this.loading = true;
			this.showState === 'SHOW_ALL' ?
				this.listData = this.props.characters[0]
				:
				this.listData = this.props.favorites;
		}
	}
	render() {
		this.checkData();
		this.checkLoading();
		return( 
			<div>
				<h3>Characters</h3>
				<div id="exTab1">	
					<ul  className="nav nav-pills">
						<li className="active">
							<a onClick={() => this.showAll()}>Characters</a>
						</li>
						<li className="active">
							<a onClick={() => this.showFavorites()}>Favorites</a>
						</li>
					</ul>
					<div className="tab-content clearfix">
						<div className="tab-pane active" id="1a">
							<div className="card-wrapper">
								<div>
									<ul className="list-group scroll-characters">
										{
											this.listData && this.listData[0] && ((!this.loading && this.showState === 'SHOW_ALL') || (this.showState === 'SHOW_FAVORITES')) ?	
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
																isFavorite={character.isFavorite}
															/>
														</li>
													);
												})
												:
												this.showState === 'SHOW_ALL' ?
													<li className="list-group-item">loading...</li>
													:
													<li className="list-group-item">no favorites</li>
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
