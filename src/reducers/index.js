import {combineReducers} from 'redux';
import {RECEIVE_CHARACTERS} from '../actions';

function characters(state = [], action) {
	switch (action.type) {
		case RECEIVE_CHARACTERS:
			return action.characters;
		default:
			return state;	
	}
}
const rootReducer = combineReducers({characters});
export default rootReducer;
