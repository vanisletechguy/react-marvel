import {combineReducers} from 'redux';
import {RECEIVE_CHARACTERS, SET_SELECTED_CHARACTER} from '../actions';

function characters(state = [], action) {
	switch (action.type) {
	case RECEIVE_CHARACTERS:
		//state = {};		
		//state = [...state, action.characters];
		state = [action.characters];
		return state;
//	case SET_SELECTED_CHARACTER:
//		if(state[1]){state.pop();}
//		return [...state, action.character];
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
