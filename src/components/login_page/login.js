import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Title from './components/Title';
import Input from './components/Input';
import SignUp from '../Sign_Up/SignUp';

const LogIn = () => {
    return (
      <div>
        <div className="box">
          <div className="title">
            <Title string={'WELCOME'} />
          </div>
          <div className="input_box">
          <ul className="list-group-item">
            <Input />
          </ul>
          </div>
          <div className="button_pos">
          <button type="button" className="btn btn-primary" onClick={SignUp}>LOG IN </button>
          </div>
        </div>
      </div>
    );
};

export default LogIn;
