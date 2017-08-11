import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import jwt from 'jwt-simple';
import config from '../../../../Server/config';

class Form_Instagram extends Component {

  handleAuth(){
    const token = localStorage.getItem('token');
    const user_id = jwt.decode(token, config.secret);

    window.open(`https://api.instagram.com/oauth/authorize/?client_id=${config.Instagram.id_key}&redirect_uri=http%3A%2F%2Fec2-54-87-137-177.compute-1.amazonaws.com%3A3090%2Finstagram_auth&response_type=code&state=${user_id.sub}&scope=basic+public_content`, "Instagram Authorization", "titlebar=yes, width=500, height=450");

  }

  deauthInstagram(){
    window.open('https://instagram.com/accounts/logout/', "Instagram Deauthorization", "titlebar=yes, width=500, height=450");
    const token = localStorage.getItem('token');
    this.props.instagram_deauth(token);
  }

  instagram_button(){
    const token = localStorage.getItem('token');
    this.props.instagram_auth(token);
  }

  render(){
    const {fields: {username}, handleSubmit} = this.props;
    return(
        <div className="modal fade" id="instagram" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Instagram</h4>
              </div>
              <div className="modal-body">
                <div className="button_pos">
                  <button type="button" className="btn btn-primary"
                   onClick={this.handleAuth.bind(this)}>CONNECT</button>
                </div>
                <div className="button_pos">
                  <button type="button" className="btn btn-danger"
                    data-dismiss="modal" onClick={this.deauthInstagram.bind(this)}>DISCONNECT</button>
                </div>
              </div>
              <div className="modal-footer">
                <div className="modal-button">
                  <button type="button" className="btn btn-primary"
                    data-dismiss="modal" onClick={this.instagram_button.bind(this)}>FINISH</button>
                </div>

              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default reduxForm({
  form: 'instagramForm',
  fields: [
    'username'
  ]
}, null, actions) (Form_Instagram);
