import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {connect} from 'react-redux';
// import setAuthorizationToken from '../utils/setAuthorizationToken';
import { SET_CURRENT_USER } from './types';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post('https://localhost:3000/login', {username: data.identifier, password:data.password}).then(res => {
      // res.redirect('/loginCheck');
      // res.send("hi");
      // const token = res.data.token;
      // localStorage.setItem('jwtToken', token);
      // setAuthorizationToken(token);
      dispatch(setCurrentUser(res.data.message));
      // dispatch()
    });
  }
}
