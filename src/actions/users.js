import { requestData, receiveData } from "./index";
import { appUrl } from "../clientConfig";

var userService = require("../services/userService");
export const USER_REGISTERED = "USER_REGISTERED";

import {RouterActions, FBSDK} from '../clientConfig'
export const registerUser = (userDto) => {
  return dispatch => {
    dispatch(requestData());
    userService.registerUser(userDto).then(response =>{
      console.log(response);
      dispatch({
        type: USER_REGISTERED,
        user: response.data
      });

    }).catch(err => {
      console.log(err);
      dispatch({
        type: "ERROR",
        error: err
      })
    });
  }
}
