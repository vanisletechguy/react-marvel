import {combineReducers} from 'redux';
import {RECEIVE_CHARACTERS, SET_SELECTED_CHARACTER, 
	CLEAR_CHARACTERS, FAVORITE_CHARACTER, UNFAVORITE_CHARACTER
} from '../actions';

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

function favorite(state = [], action) {
	var newState = [];
	switch (action.type) {
	case FAVORITE_CHARACTER:
		if(state && state[0]){
			newState = state.filter((c) => c !== action.favorite);
			newState = [...newState, action.favorite];
		} else{
			newState = [...state, action.favorite];
		}
		return newState;
	case UNFAVORITE_CHARACTER:
		state = state.filter((c) => c !== action.favorite);	
		return state;
	default:
		return state;
			
	}
}
const rootReducer = combineReducers({characters, selected, favorite});
export default rootReducer;
