//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

//New Component

//Showing HTML in the DOM

//This renders the routes defined in routes.js
ReactDOM.render(<Router history={browserHistory} routes={routes}/>
	, document.querySelector('.container'));
