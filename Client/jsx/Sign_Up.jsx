import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components

import SignUpForm from './Sign_Up/Sign_Up_Form.jsx';


var Sign_Up = React.createClass({
  render(){
    return(
      <div>
          <div className="box-form">
            <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">SIGN UP</h3>
              </div>
              <div className="panel-body">
                <SignUpForm />
              </div>
            </div>
          </div>
    </div>
    );
  }
});

module.exports =  Sign_Up;
