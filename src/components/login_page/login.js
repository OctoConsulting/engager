import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
//Custom components
import Title from './components/Title';
import Input from './components/Input';
import SignUp from '../Sign_Up/SignUp';

const LogIn = () => {
    return (
        <div className="box">
          <div className="title">
            <Title string={'WELCOME'} />
          </div>
          <div className="list-group-item">
          <ul>
            <Input />
          </ul>
          <div className="col-md-4 center-block">
          <div className="btn-toolbar" role="toolbar" aria-label="...">
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className="btn btn-primary">LOG IN </button>
            </div>
            {/*necessary routing for the button to call up another component*/}
            <div className="btn-group" role="group" aria-label="...">
              <Link to="/SignUp" className="btn btn-primary">SIGN UP </Link>
            </div>
          </div>
          </div>
          </div>
        </div>
    );
};

export default LogIn;
