import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, hashHistory} from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';


class GitHub_Redirect extends Component{

  componentDidMount(){
    console.log(this.params.code);
    console.log(this.params.state);
  }

  render(){
    return(
      <div className="message-box">
        <div className="panel panel-success">
          <div className="panel-heading"><h4><strong>GitHub Log in Success</strong></h4></div>
          <div className="panel-body">
            Thank you for logging in your GitHub account.
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, actions) (GitHub_Redirect);
