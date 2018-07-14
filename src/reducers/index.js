import {combineReducers} from 'redux';
import {RECEIVE_CHARACTERS, SET_SELECTED_CHARACTER, CLEAR_CHARACTERS} from '../actions';

function characters(state = [], action) {
	switch (action.type) {
	case CLEAR_CHARACTERS:
		state = [];
		return state;
	case RECEIVE_CHARACTERS:
		state = [action.characters];
		return state;
	default:
		return state;	
	}
}

function selected(state = [], action) {
	switch (action.type) {
	case SET_SELECTED_CHARACTER:
		state = action.character;
		return state;
	default:
		return state;
	}
}
const rootReducer = combineReducers({characters, selected});
export default rootReducer;
