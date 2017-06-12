import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Title from '../Log_In/components/Title';
import SignUpForm from './components/signUpForm';


const Sign_Up = () => {
  return(
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">SIGN UP</h3>
        </div>
        <div className="panel-body">
          <SignUpForm />
        </div>
      </div>
  );
};

export default Sign_Up;
