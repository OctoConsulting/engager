import React from 'react';
import {Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import App from './App';
import Log_In from './components/Log_In/Log_In';
import Sign_Up from './components/Sign_Up/Sign_Up';
import SignUp_Redirect from './components/Sign_Up/SignUp_Redirect';
import Verify from './components/Sign_Up/Verify';
import Sign_Out from './components/Sign_Out/Sign_Out';
import Dashboard from './components/Dashboard/Dashboard';
import Per_Profile from './components/Per_Profile/Per_Profile';
import Pub_Profile from './components/Pub_Profile/Pub_Profile';
import Require_Auth from './components/authentication/require_auth';
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
      <Route path="signin" component={Log_In}/>
      <Route path="signup" component={Sign_Up}/>
      <Route path="signup_redirect" component={Require_Auth(SignUp_Redirect)}/>
      <Route path="verify/:token" component={Verify}/>
      <Route path="signout" component={Require_Auth(Sign_Out)}/>
      <Route path="dashboard" component={Require_Auth(Dashboard)}/>
      <Route path="Profile" component={Require_Auth(Per_Profile)}>
        <IndexRoute component={Require_Auth(Per_Profile)}/>
      </Route>
      <Route path="Pub_Profile" component={Require_Auth(Pub_Profile)}/>
    </Route>
);
