import axios from 'axios';
import {hashHistory} from 'react-router';
import jwt from 'jwt-simple';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  CLEAR_ERROR,
  USER_INFO,
  USERS } from './types';
import config from '../../Server/config';
const SERVER_URL = 'http://localhost:3090';


/*
###########################################################################
#                                                                         #
#                             SIGN IN - SIGN UP                           #
#                                                                         #
###########################################################################
*/
//ACTION CREATOR WHERE THE DATA IS ACTUALLY SENT TO THE SERVER
export function signinUser({email, password}){
  //returning function() -- product of redux-thunk -- usually ACTION CREATOR
  //only returns an object
  //Where all the logic goes
  //dispatch is the main pipeline where all data are passed into all reducers
  return function(dispatch){
    //Submit info to SERVER -- using promises
    axios.post(`${SERVER_URL}/signin`, { email, password })
          .then(response => {
            //If request is valid:
            //   + Update the state to authenticated
            dispatch({type: AUTH_USER});
            //   + Save the JWT token to local storage
            localStorage.setItem('token', response.data.token);
            //   + Redirect the user to main dashboard
            hashHistory.push('/dashboard');
          })
          .catch( () => {
            //If request is invalid:
            //   + Show an error to the user
            dispatch(authError("Sorry! Your login info is either incorrect or has not be verified via email."))
          })
  }
}

//VERIFYING USERNAME WHEN THEY CONFIRM THEIR EMAIL
export function verifyUser(token){
  const user_id = jwt.decode(token, config.secret);
  return function(dispatch){
    axios.put(`${SERVER_URL}/verify/${user_id.sub}`)
          .then( response => {
            console.log(response.data)
          })
          .catch( () => dispatch(authError(response.error)));
  }
}



export function signupUser({name, email, password}){
  //returning function() -- product of redux-thunk -- usually ACTION CREATOR
  //only returns an object
  //Where all the logic goes
  //dispatch is the main pipeline where all data are passed into all reducers
  return function(dispatch){
    //Submit info to SERVER -- using promises
    axios.post(`${SERVER_URL}/signup`, { name, email, password })
        .then(response => {
          dispatch({type: AUTH_USER});
          localStorage.setItem('email', email);
          hashHistory.push('/signup_redirect');
        })
        .catch(error => {
          //If request is invalid:
          //   + Show an error to the user
          dispatch(authError(error.response.data.error));
        })
  }
}

//CLEARING ERROR MESSAGES WHEN SWITCHING BETWEEN COMPONENTS
//USED BY SIGN IN / SIGN UP SO OLD ERROR MESSAGES WON'T RANDOMLY SHOW
export function clearError(){
  return function(dispatch){
    dispatch({type: CLEAR_ERROR});
  }
}


export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}

export function signoutUser(){
  localStorage.removeItem('token');
  return{
    type: UNAUTH_USER
  }
}

/*
###########################################################################
#                                                                         #
#                      USER INFORMATION RETRIEVAL                         #
#                                                                         #
###########################################################################
*/
export function retrieveUser(token){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);

    axios.get(`${SERVER_URL}/user/${user_id.sub}`)
        .then(response => {
          console.log(response.data);
          const filtered_data = {
            name: response.data.name,
            email: response.data.email,
            facebook: response.data.facebook.username,
            twitter: response.data.twitter.username,
            stackoverflow: response.data.stackoverflow.username,
            instagram: response.data.instagram.username,
            github: response.data.github.username,
            linkedin: response.data.linkedin.username
          }
          dispatch({type: USER_INFO, payload: filtered_data});
        })
        .catch(() => dispatch(authError(response.error)))
  }
}



/*
###########################################################################
#                                                                         #
#                      USERS INFORMATION RETRIEVAL                        #
#                                                                         #
###########################################################################
*/

let data;
export function retrieveDashboard(){
  return function(dispatch){
    axios.get(`${SERVER_URL}/dashboard`)
        .then(response => {
           dispatch({type: USERS, payload: response.data});
        })
        .catch(() => console.log("error"))
  }
}


/*
###########################################################################
#                                                                         #
#                        SOCIAL MEDIA INTEGRATION                         #
#                                                                         #
###########################################################################
*/

export function socialmedia_integrate({type, token, username}){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    let data = {};
    let cmd = '';
    switch(type){
      case 'Twitter':
        data = {
          'twitter': username
        };
        cmd = 'pushTwitterData';
        break;
      case 'StackOverflow':
        data = {
          'stackoverflow': username
        }
        cmd = 'pushStackOverflowData';
        break;
      case 'GitHub':
        data = {
          'github': username
        };
        cmd = 'pushGitHubData';
        break;
    }

    axios.put(`${SERVER_URL}/${cmd}/${user_id.sub}`, data)
        .then( response => {
          console.log(username)
        })
        .catch( () => dispatch(authError(response.error)));
  }
}
