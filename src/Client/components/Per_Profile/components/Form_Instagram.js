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

    window.open(`https://api.instagram.com/oauth/authorize/?client_id=${config.Instagram.id_key}&redirect_uri=http%3A%2F%2Flocalhost:3090/authInstagram&response_type=code&state=${user_id.sub}&scope=basic+public_content`, "Instagram Authorization", "titlebar=yes, width=500, height=450");

  }

  handleDeauth(){
    window.open('https://instagram.com/accounts/logout/', "Instagram Deauthorization", "titlebar=yes, width=500, height=450");
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
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Instagram</h4>
              </div>
              <div className="modal-body">
                <div className="button_pos">
                  <button type="button" className="btn btn-primary"
                    data-dismiss="modal" onClick={this.handleAuth}>CONNECT</button>
                </div>
                <div className="button_pos">
                  <button type="button" className="btn btn-warning"
                    data-dismiss="modal" onClick={this.handleDeauth}>DISCONNECT</button>
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
