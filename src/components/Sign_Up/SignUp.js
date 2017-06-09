import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Title from '../login_page/components/Title';
import SignUpForm from './components/signUpForm';


const SignUp = () => {
  return(
    <div>
      <div className="box">
        <div className="title">
          <Title string={'SIGN UP'} />
        </div>
        <div className="box">
          <SignUpForm />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
