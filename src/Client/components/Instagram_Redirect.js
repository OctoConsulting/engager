import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, hashHistory} from 'react-router';
import { connect } from 'react-redux';



export default class Instagram_redirect extends Component{
  componentDidMount(){
    const token = this.props.params.token;
    console.log(token);
    setTimeout(() => window.close(), 5000);
  }
  render(){
    return(
      <div className="message-box">
        <div className="panel panel-success">
          <div className="panel-heading"><h4><strong>Instagram Login</strong></h4></div>
          <div className="panel-body">
            Successfully logged in!
          </div>
        </div>
      </div>
    );
  }
}
