import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, hashHistory} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';


//USER IS DIRECTED TO THIS AFTER SIGNING UP
export default class SignUp_Redirect extends Component{
  componentDidMount(){
    setTimeout(() => hashHistory.push('/'), 5000);
  }
  render(){
    const email = localStorage.getItem('email');
    return(
      <div className="message-box">
        <div className="panel panel-success">
          <div className="panel-heading"><h4><strong>Email Verification</strong></h4></div>
          <div className="panel-body">
            An email has been sent to <strong>{email}</strong>.
            <br/>
            Please check your email and use the link provided to verify your account.
            <br/>
            You will <strong>NOT</strong> be able to log in until your account is verified.
            <br/>
            You will be redirected in 5 seconds.
          </div>
        </div>
        <Link to='/' className="btn btn-primary">RETURN TO HOME PAGE</Link>

      </div>
    );
  }
}
