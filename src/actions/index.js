export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';
export const SET_SELECTED_CHARACTER = 'SET_SELECTED_CHARACTER';
export const CLEAR_CHARACTERS = 'CLEAR_CHARACTERS';

function fetchCharactersJSON(letter) {
	return fetch('https://gateway.marvel.com:443/v1'+
		'/public/characters?ts=1&limit=100&&nameStartsWith='+letter+
		'&apikey=d331da6eb1dccfc20c013db05af8fc8d&hash=7afe95c07a3405af0b83ee17e8439eda')
		.then(response => response.json());
}

function receiveCharacters(json) {
	var characters = json.data.results;
	return {
		type:RECEIVE_CHARACTERS,
		characters
	};
}

export function clearCharacters(){
	return {
		type: CLEAR_CHARACTERS
	};
}

export function fetchCharacters(letter) {
	return function(dispatch) {
		return fetchCharactersJSON(letter)
			.then(json => dispatch(receiveCharacters(json)));
	};
}

export function setSelectedCharacter(character){
	const action = {
		type: SET_SELECTED_CHARACTER,
		character
	};
	return action;
}
