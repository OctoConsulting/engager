import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import jwt from 'jwt-simple';
import config from '../../../../Server/config';
import request from 'request';


class Form_Twitter_OAuth extends Component {

  handleAuth(){
    const options = {
      url: 'https://api.twitter.com/oauth/request_token',
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'user-agent': 'nodejs'
      },
      forms: {
        'oauth_callback' : 'http://localhost:3090/twitter_auth',
        'oauth_consumer_key': 'bb65c1a4262349d78765097663077982'
      }
    };

    request(options, function(err, response, body){
      console.log(body);
    });

  }

  deauthTwitter(){
    const type = 'twitter';
    const token = localStorage.getItem('token');
    this.props.socialmedia_deauth({type, token});
  }

  render(){
    const {fields: {username}, handleSubmit} = this.props;
    return(
        <div className="modal fade" id="twitter" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Twitter</h4>
              </div>
              <div className="modal-body">
                <input className="form-control"
                  name="username" id="username"
                  type="text" placeholder="Twitter Username" {...username}></input>
              </div>
              <div className="modal-footer">
                <div className="modal-button">
                  <button type="submit" className="btn btn-primary" data-dismiss="modal"
                    onClick= {this.handleAuth.bind(this)}>CONNECT</button>

                    <button type="button" className="btn btn-warning" data-dismiss="modal"
                      onClick= {this.deauthTwitter.bind(this)}>DISCONNECT</button>
                </div>

              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default reduxForm({
  form: 'twitterForm',
  fields: [
    'username'
  ]
}, null, actions) (Form_Twitter_OAuth);
