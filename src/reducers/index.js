import {combineReducers} from 'redux';
import {RECEIVE_CHARACTERS, SET_SELECTED_CHARACTER} from '../actions';

function characters(state = [], action) {
	switch (action.type) {
		case RECEIVE_CHARACTERS:
			state = [...state, action.characters];
			return state;
		case SET_SELECTED_CHARACTER:
			console.log('sle', action.character);
			state.selectedCharacter = action.character;
			console.log('sle22', state);
			//state.character = {};
			//state = [...state, action.character];
		//	state[1] = action.character;
			console.log('wwwww', state);
			return state;
		default:
			return state;	
	}
}
const rootReducer = combineReducers({characters});
export default rootReducer;
