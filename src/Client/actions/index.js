import axios from 'axios';
import {browserHistory} from 'react-router';

import {AUTH_USER, AUTH_ERROR} from './types';

const SERVER_URL = 'http://localhost:3090';

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

export function authError(error){
  return {
    type: AUTH_ERROR,
    payload: error
  }
}
