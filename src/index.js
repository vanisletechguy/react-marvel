import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import {createStore, applyMiddleware} from 'redux';
import {fetchCharacters} from './actions';

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(fetchCharacters('a'));

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
