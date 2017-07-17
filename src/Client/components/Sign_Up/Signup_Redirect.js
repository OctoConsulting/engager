import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class SignUp_Redirect extends Component{

  render(){
    return(
      <div className="message-box">
        <div className="panel panel-success">
          <div className="panel-heading"><h4><strong>Email Verification</strong></h4></div>
          <div className="panel-body">
            An email has been sent to <strong>{(this.props.userInfo !== null) ? this.props.userInfo.email : ''}</strong>.
            <br/>
            Please check your email and use the link provided to verify your account.
            <br/>
            You will <strong>NOT</strong> be able to log in until your account is verified.
            <br/>
          </div>
        </div>
        <Link to='/SignIn' className="btn btn-primary">RETURN TO HOME PAGE</Link>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    userInfo: state.auth.userInfo
  }
}

export default connect(mapStateToProps, actions) (SignUp_Redirect);
