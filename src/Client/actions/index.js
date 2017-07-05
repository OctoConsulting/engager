import axios from 'axios';
import {browserHistory} from 'react-router';
import jwt from 'jwt-simple';
import {AUTH_USER, UNAUTH_USER, AUTH_ERROR, USER_INFO} from './types';
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
            browserHistory.push('/dashboard');
          })
          .catch(() => {
            //If request is invalid:
            //   + Show an error to the user
            dispatch(authError('Bad Login Info'));
          })
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
          localStorage.setItem('token', response.data.token);
          browserHistory.push('/dashboard');
        })
        .catch(error => {
          //If request is invalid:
          //   + Show an error to the user
          dispatch(authError(error.response.data.error));
        })
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
          dispatch(sendUser(response.data));
        })
        .catch(() => dispatch(authError(response.error)))
  }
}


export function sendUser(response){
  return {
    type: USER_INFO,
    payload: response
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
        console.log(data);
      case 'StackOverflow':
        data = {
          'stackoverflow': username
        }
        cmd = 'pushStackOverflowData';
      case 'GitHub':
        data = {
          'github': username
        };
        cmd = 'pushGitHubData';
    }

    axios.put(`${SERVER_URL}/${cmd}/${user_id.sub}`, data)
        .then( response => {
          console.log(response.data)
        })
        .catch( () => dispatch(authError(response.error)));
  }
}
