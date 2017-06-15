//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import configureStore from "./store/configure-store";
import routes from './routes';
const store = configureStore();

//New Component

//Showing HTML in the DOM

//This renders the routes defined in routes.js
ReactDOM.render(<Provider store={store}><Router history={browserHistory} routes={routes}/></Provider>
	, document.querySelector('.container'));
