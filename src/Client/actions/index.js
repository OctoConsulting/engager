import axios from 'axios';
import {browserHistory} from 'react-router';
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
            browserHistory.push('/dashboard');
          })
          .catch( () => {
            //If request is invalid:
            //   + Show an error to the user
            dispatch(authError("Sorry! Your login info is either incorrect or has not be verified via email."))
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
          browserHistory.push('/signup_redirect');
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
    if (localStorage.getItem('token') !== null){
      signoutUser();
    }
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
            facebook_check: response.data.facebook_check,
            twitter_check: response.data.twitter_check,
            stackoverflow_check: response.data.stackoverflow_check,
            instagram_check: response.data.instagram_check,
            github_check: response.data.github_check,
            linkedin_check: response.data.linkedin_check
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

// export function retrieveDashboard(){
//   return function(dispatch){
//     // const user_id = jwt.decode(token, config.secret);
//
//     axios.get(`${SERVER_URL}/dashboard`)
//         .then(response => {
//           dispatch(sendDashboard(response.data));
//         })
//         .catch(() => dispatch(authError(response.error)))
//   }
// }
let data;
export function retrieveDashboard(){
  return function(dispatch){
    axios.get(`${SERVER_URL}/dashboard`)
        .then(response => {
           console.log("5")
           dispatch({type: USERS, payload: response.data});
           //data = response.data;
           //sendDashboard(data);
           //return data;
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
        console.log(data);
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
          console.log(response.data)
        })
        .catch( () => dispatch(authError(response.error)));
  }
}
