import React from 'react';
import { render } from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from 'reducers/root';
import Routes from 'components/Routes';
import './global.scss';

const App = () => (
	<Provider store={ createStore(rootReducer, applyMiddleware(thunk)) }>
		<Routes />
	</Provider>
);

render(
	<App />,
	document.getElementById('root')
);
