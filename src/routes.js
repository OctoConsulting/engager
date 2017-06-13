import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Log_In from './components/Log_In/Log_In';
import Banner from './Banner';
import Sign_Up from './components/Sign_Up/Sign_Up';
import Dashboard from './components/Dashboard/components/dashboard';
import Per_Profile from './components/Per_Profile/Per_Profile';
//routing
// The default always brings up the banner first
//IndexRoute makes it so that if it's on the slash, it will
//also render the 2nd component App.
//The other routes are just there to catch all possible hits
//to the home page
export default (
<Route path="/" component={Banner}>
  <IndexRoute component={Log_In} />
  <Route path="home" component={Log_In}/>
  <Route path="index" component={Log_In}/>
  <Route path="SignUp" component={Sign_Up}/> {/*This is so that the Sign up button can use it*/}
  <Route path="Dashboard" component={Dashboard}/>
  <Route path="Per_Profile" component={Per_Profile}/>
</Route>
);
