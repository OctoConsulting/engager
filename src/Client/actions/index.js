import axios from 'axios';
import {hashHistory} from 'react-router';
import jwt from 'jwt-simple';
import {
  PUBLIC_USER_ID,
  PUBLIC_USER_INFO,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  CLEAR_ERROR,
  USER_INFO,
  AVATAR,
  USERS,
  EVENTS_INFO,
  FACEBOOK,
  TWITTER,
  STACKOVERFLOW,
  INSTAGRAM,
  GITHUB,
  LINKEDIN,
  JSFIDDLE
} from './types';
import config from '../../Server/config';
const SERVER_URL = config.server_url;


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
            hashHistory.push('/Profile');
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
          .catch( response => dispatch(authError(response.error)));
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
          const filtered_data = {
            name: response.data.name,
            avatar: response.data.avatar,
            email: response.data.email,
            banner: response.data.banner
          }
          dispatch({type: USER_INFO, payload: filtered_data});
          dispatch({type:AVATAR, payload:response.data.avatar});
          dispatch({type:TWITTER, payload:response.data.twitter.username});
          dispatch({type:STACKOVERFLOW, payload:response.data.stackoverflow.username});
          dispatch({type:GITHUB, payload:response.data.github.username});
          dispatch({type:FACEBOOK, payload:response.data.facebook.username});
          dispatch({type:LINKEDIN, payload:response.data.linkedin.username});
          dispatch({type:INSTAGRAM, payload:response.data.instagram.username});
          dispatch({type:JSFIDDLE, payload:response.data.jsfiddle.username});
        })
        .catch(response => dispatch(authError(response.error)))
  }
}

export function retrievePublicUser(token){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    axios.get(`${SERVER_URL}/user/${user_id.sub}`)
        .then( response => {
          dispatch({type: PUBLIC_USER_INFO, payload: response.data});
        })
        .catch( response => dispatch(authError(response.error)));
  }
}

/*
###########################################################################
#                                                                         #
#                      USERS INFORMATION RETRIEVAL                        #
#                                                                         #
###########################################################################
*/


export function retrieveAlltimeDashboard(){
  return function(dispatch){
    axios.get(`${SERVER_URL}/dashboard`)
        .then(response => {
           dispatch({type: USERS, payload: response.data});
        })
        .catch(repsonse => console.log("error"))
  }
}

export function retrieveWeeklyDashboard(){
  return function(dispatch){
    axios.get(`${SERVER_URL}/dashboard_weekly_filter`)
          .then( response => {
            dispatch({type:USERS, payload:response.data});
          })
          .catch (response => console.log("Weekly board retrieval error!"));
  }
}

export function retrieveMonthlyDashboard(){
  return function(dispatch){
    axios.get(`${SERVER_URL}/dashboard_monthly_filter`)
          .then(response => {
            dispatch({type:USERS, payload:response.data});
          })
          .catch(response => console.log("Monthly board retrieval error!"));
  }
}

/*
###########################################################################
#                                                                         #
#                        SOCIAL MEDIA INTEGRATION                         #
#                                                                         #
###########################################################################
*/
//THIS IS FOR TWITTER - GITHUB - STACKOVERFLOW
//NO OAUTH2 REQUIRED
export function socialmedia_auth({type, token, username}){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    let data = {};
    let cmd = '';
    switch(type){
      case 'twitter':
        data = {
          'twitter': username
        };
        cmd = 'twitter_auth';
        break;
      case 'stackoverflow':
        data = {
          'stackoverflow': username
        }
        cmd = 'stackoverflow_auth';
        break;
      case 'jsfiddle':
        data = {
          'jsfiddle': username
        };
        cmd = 'jsfiddle_auth'
    }

    axios.put(`${SERVER_URL}/${cmd}/${user_id.sub}`, data)
        .then( response => {
          switch(type){
            case 'twitter':
              dispatch({type:AVATAR, payload: response.data.avatar});
              dispatch({type:TWITTER, payload:response.data.twitter.username});
              break;
            case 'stackoverflow':
              dispatch({type:STACKOVERFLOW, payload:response.data.username});
              break;
            case 'jsfiddle':
              dispatch({type:JSFIDDLE, payload:response.data.username});
              break;
          }
        })
        .catch( response => dispatch(authError(response.error)));
  }
}

export function socialmedia_deauth({type, token}){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);

    axios.put(`${SERVER_URL}/${type}_deauth/${user_id.sub}`)
        .then( response => {
          switch(type){
            case 'twitter':
              dispatch({type:TWITTER, payload:''});
              break;
            case 'stackoverflow':
              dispatch({type:STACKOVERFLOW, payload:''});
              break;
            case 'github':
              dispatch({type:GITHUB, payload:''});
              break;
            case 'jsfiddle':
              dispatch({type:JSFIDDLE, payload: ''});
          }
        })
        .catch( response => dispatch(authError(response.error)));
  }
}


//FACEBOOK SPECIFIC CALL SINCE IT'S FORMATTED DIFFERENTLY
//OATH2 REQUIRED
export function facebook_auth({accessToken, userToken}){
  return function(dispatch){
    const user_id = jwt.decode(userToken, config.secret);

    const data = {
      'accessToken': accessToken
    };

    axios.put(`${SERVER_URL}/facebook_auth/${user_id.sub}`, data)
          .then( response => {
            dispatch({type:FACEBOOK, payload:response.data.username});
          })
          .catch( response => dispatch(authError(error.status)));
  }
}

export function facebook_deauth(userToken){
  return function(dispatch){
    const user_id = jwt.decode(userToken, config.secret);
    axios.put(`${SERVER_URL}/facebook_deauth/${user_id.sub}`)
          .then( response => {
            dispatch({type:FACEBOOK, payload:''});
          })
          .catch( response => dispatch(authError(response.error)));
  }
}

//GITHUB OAUTH FUNCTION
export function github_auth(token){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    axios.get(`${SERVER_URL}/user/${user_id.sub}`)
        .then(response => {
          dispatch({type:GITHUB, payload:response.data.github.username});
        })
        .catch(response => dispatch(authError(response.error)))
  }
}


//#########################################################################
//LINKEDIN
export function linkedin_auth(token){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    axios.get(`${SERVER_URL}/user/${user_id.sub}`)
        .then(response => {
          dispatch({type:AVATAR, payload:response.data.avatar});
          dispatch({type:LINKEDIN, payload:response.data.linkedin.username});
        })
        .catch(response => dispatch(authError(response.error)))
  }
}

export function linkedin_deauth(token){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    axios.put(`${SERVER_URL}/linkedin_deauth/${user_id.sub}`)
          .then( response => {
            dispatch({type:LINKEDIN, payload: ''});
          })
          .catch( response => dispatch(authError(response.error)));
  }
}
//########################################################################


//INSTAGRAM
export function instagram_auth(token){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    axios.get(`${SERVER_URL}/user/${user_id.sub}`)
        .then(response => {
          dispatch({type:INSTAGRAM, payload:response.data.instagram.username});
        })
        .catch(response => dispatch(authError(response.error)))
  }
}

export function instagram_deauth(token){
  return function(dispatch){
    const user_id = jwt.decode(token, config.secret);
    axios.put(`${SERVER_URL}/instagram_deauth/${user_id.sub}`)
          .then( response => {
            dispatch({type:INSTAGRAM, payload: ''});
          })
          .catch( response => dispatch(authError(response.error)));
  }
}



/*
###########################################################################
#                                                                         #
#                               PUBLIC PROFILE                            #
#                                                                         #
###########################################################################
*/
export function pushUserID(user_id){
  return function(dispatch){
    dispatch({type: PUBLIC_USER_ID, payload: user_id});
  }
}


/*
###########################################################################
#                                                                         #
#                        AD HOC FORMS INTEGRATION                         #
#                                                                         #
###########################################################################
*/

export function retrieveEvents(token){
  const user_id = jwt.decode(token, config.secret);
  return function (dispatch){
    axios.get(`${SERVER_URL}/getEvent/${user_id.sub}`)
          .then( response => {
            dispatch({type: EVENTS_INFO, payload: response.data});
          })
          .catch( response => console.log("error getting event list"));
  }
}

export function addingEvent({token, type, eventName, description, expiration}){
  const user_id = jwt.decode(token, config.secret);
  const timestamp_n = new Date();
  const timestamp_epoch = Date.parse(timestamp_n) / 1000;

  return function (dispatch){
    axios.put(`${SERVER_URL}/addingEvent/${user_id.sub}`, {timestamp_epoch, type, eventName, description, expiration})
          .then( response => {
            console.log(response.data);
            dispatch({type:EVENTS_INFO, payload:response.data});
          })
          .catch( response => dispatch(authError(response.error)));
  }
}

export function deletingEvent({token, timestamp}){
  const user_id = jwt.decode(token, config.secret);
  return function(dispatch){
    axios.put(`${SERVER_URL}/deletingEvent/${user_id.sub}`, {timestamp})
          .then(response => {

            dispatch({type:EVENTS_INFO, payload:response.data});
          })
          .catch( response => dispatch(authError(response.error)));
  }
}
