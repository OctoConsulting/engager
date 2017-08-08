import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import jwt from 'jwt-simple';
import config from '../../../../Server/config';

class Form_GitHub_OAuth extends Component {

  handleAuth(){
    const token = localStorage.getItem('token');
    const user_id = jwt.decode(token, config.secret);
    window.open(`http://github.com/login/oauth/authorize?client_id=${config.GitHub.id_key}&state=${user_id.sub}&scope=user%20public_repo%20repo:status`, "GitHub Authorization", "titlebar=yes, width=500, height=450");
  }

  deauthGitHub(){
    window.open(`https://github.com/logout`, "GitHub Authorization", "titlebar=yes, width=500, height=450");
    const token = localStorage.getItem('token');
    this.props.github_deauth(token);
  }

  github_button(){
    const token = localStorage.getItem('token');
    this.props.github_auth(token);
  }

  render(){
    const {fields: {username}, handleSubmit} = this.props;
    return(
        <div className="modal fade" id="github" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Github</h4>
              </div>
              <div className="modal-body">
                <div className="modal-button">
                  <button type="submit" className="btn btn-primary"
                    onClick= {handleSubmit(this.handleAuth.bind(this))}>CONNECT</button>

                    <button type="button" className="btn btn-warning"
                      onClick= {this.deauthGitHub.bind(this)}>DISCONNECT</button>
                </div>
              </div>

                <div className="modal-footer">
                  <div className="modal-button">
                    <button type="submit" className="btn btn-primary"
                      data-dismiss="modal" onClick={this.github_button.bind(this)}>FINISH</button>
                  </div>
                </div>

            </div>
          </div>
        </div>
    );
  }
}


export default reduxForm({
  form: 'githubForm',
  fields: [
    'username'
  ]
}, null, actions) (Form_GitHub_OAuth);
