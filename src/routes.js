import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux'
import App from './App';
import Log_In from './components/Log_In/Log_In';
import Sign_Up from './components/Sign_Up/Sign_Up';
import Dashboard from './components/Dashboard/components/dashboard';
import Per_Profile from './components/Per_Profile/Per_Profile';
import configureStore from "./store/configure-store";
const store = configureStore();
//routing
// The default always brings up the banner first
//IndexRoute makes it so that if it's on the slash, it will
//also render the 2nd component App.
//The other routes are just there to catch all possible hits
//to the home page
export default (
    <Route path="/" component={App}>
      <IndexRoute component={Log_In}/>
      <Route path="home" component={Log_In}/>
      <Route path="index" component={Log_In}/>
      <Route path="SignUp" component={Sign_Up}/> {/*This is so that the Sign up button can use it*/}
      <Route path="Dashboard" component={Dashboard}/>
      <Route path="Per_Profile" component={Per_Profile}/>
    </Route>
);
