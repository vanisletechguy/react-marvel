export const RECEIVE_CHARACTERS = 'RECEIVE_CHARACTERS';

function fetchCharactersJSON() {
	return fetch('https://gateway.marvel.com/v1/public/characters?ts=1&limit=100&&apikey=d331da6eb1dccfc20c013db05af8fc8d&hash=7afe95c07a3405af0b83ee17e8439eda')
		.then(response => response.json());
}

function receiveCharacters(json) {
	var characters = json.data.results;
	console.log('chars', characters);
	return {
		type:RECEIVE_CHARACTERS,
		characters
	}
}
export function fetchCharacters() {
	return function(dispatch) {
		return fetchCharactersJSON()
			.then(json => dispatch(receiveCharacters(json)))
	}
}
