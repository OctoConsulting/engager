import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import jwt from 'jwt-simple';
import config from '../../../../Server/config';

class Form_Linkedin extends Component {

  handleAuth(){
    const token = localStorage.getItem('token');
    const user_id = jwt.decode(token, config.secret);
    window.open(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${config.Linkedin.id_key}&redirect_uri=http%3A%2F%2Fec2-54-87-137-177.compute-1.amazonaws.com%3A3090%2Flinkedin_auth&state=${user_id.sub}&scope=r_basicprofile,r_emailaddress`, "Linkedin Authorization", "titlebar=yes, width=500, height=450");
  }

  handleDeauth(){
    const token = localStorage.getItem('token');
    this.props.linkedin_deauth(token);
  }

  linkedin_button(){
    const token = localStorage.getItem('token');
    this.props.linkedin_auth(token);
  }

  render(){
    const {fields: {username}, handleSubmit} = this.props;
    return(
        <div className="modal fade" id="linkedin" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Linkedin</h4>
              </div>
              <div className="modal-body">
                <div className="button_pos">
                  <button type="button" className="btn btn-primary"
                     onClick={this.handleAuth}>CONNECT</button>
                </div>
                <div className="button_pos">
                  <button type="button" className="btn btn-danger"
                    data-dismiss="modal" onClick={this.handleDeauth.bind(this)}>DISCONNECT</button>
                </div>
              </div>

              <div className="modal-footer">
                <div className="modal-button">
                  <button type="submit" className="btn btn-primary"
                    data-dismiss="modal" onClick={this.linkedin_button.bind(this)}>FINISH</button>
                </div>
              </div>

            </div>
          </div>
        </div>
    );
  }
}

export default reduxForm({
  form: 'LinkedinForm',
  fields: [
    'username'
  ]
}, null, actions) (Form_Linkedin);
