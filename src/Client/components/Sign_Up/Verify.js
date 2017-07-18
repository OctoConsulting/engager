import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, hashHistory} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';


class Verify extends Component{

  componentDidMount(){
    const token = this.props.params.token;
    this.props.verifyUser(token);
    setTimeout(() => hashHistory.push('/'), 5000);
  }

  render(){
    return(
      <div className="message-box">
        <div className="panel panel-success">
          <div className="panel-heading"><h4><strong>Email Verification Success</strong></h4></div>
          <div className="panel-body">
            Thank you for verifying your email.
            <br/>
            Your account is now activated. Sign in and enjoy!
            <br/>
          </div>
        </div>
        <Link to='/' className="btn btn-primary">SIGN IN</Link>
      </div>
    );
  }
}


export default connect(null, actions) (Verify);
