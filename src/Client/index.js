//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import configureStore from "./store/configure-store";
import routes from './routes';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);



//This renders the routes defined in routes.js
ReactDOM.render(
	<Provider store={createStoreWithMiddleware(rootReducer)}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>
	, document.querySelector('.container'));
