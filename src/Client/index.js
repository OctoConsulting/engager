//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import configureStore from './store/configure-store';
import reduxThunk from 'redux-thunk';
import routes from './routes';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import {AUTH_USER} from './actions/types';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);


//store contains the current redux state -- everything flows through reducers
const store = createStoreWithMiddleware(reducers);
//THIS CHECKS FOR AUTHENTICATION --
//IN CASE THE USER REFRESHES WHILE LOGGED IN
//Or navigate around while logged in
const token = localStorage.getItem('token');
if (token){
	//Update application state
	store.dispatch({type: AUTH_USER});
}

//This renders the routes defined in routes.js
ReactDOM.render(
	<Provider store={store}>
		<Router history={browserHistory} routes={routes}/>
	</Provider>
	, document.querySelector('.container'));
