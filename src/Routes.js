import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';

export default () => (
	<BrowserRouter>
		<App>
			<Route exact path="/" component={ Home } />
		</App>
	</BrowserRouter>
);
