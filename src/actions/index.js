
/*global setTimeout*/

import {RouterActions} from '../clientConfig'
import { getCurrentUser } from "../services/userService";
import { loginSuccess } from "./users";



export const NavActions = RouterActions;

export const REQUEST_DATA = "REQUEST_DATA";
export const RECEIVE_DATA = "RECEIVE_DATA";

export const requestData = () => {
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = (data) => {
  RouterActions.login({});
  return {
    type: RECEIVE_DATA,
    data
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestData());
    getCurrentUser()
      .then(response => {
        var user = response.data;
        if(user && user._id){
          dispatch(loginSuccess(user));
        } else {
          dispatch(receiveData({}));
        }
      })
      .catch(err => {
        const data = {message: "Hello"};
        dispatch(receiveData(data));
      });
  };
};
