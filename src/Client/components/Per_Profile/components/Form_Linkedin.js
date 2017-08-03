import React, {Component, PropTypes} from 'react';
import {Link} from 'react-router';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import jwt from 'jwt-simple';
import config from '../../../../Server/config';

class Form_Linkedin extends Component {

  handleFormSubmit(){
    console.log('from front end: ');
    const token = localStorage.getItem('accessToken');
    console.log(token);
  }

  openWindow(){
    const token = localStorage.getItem('token');
    const user_id = jwt.decode(token, config.secret);
    let testWindow = window.open(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=778l6ot4kvtw5r&redirect_uri=http%3A%2F%2Flocalhost:3090/authLinkedin&state=${user_id.sub}&scope=r_basicprofile,r_emailaddress`, "Linkedin Authorization", "titlebar=yes, width=500, height=450");
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
                <h4 className="modal-title">LinkIn</h4>
              </div>
              <div className="modal-body">
                <button className="btn btn-primary"
                  onClick={this.openWindow}>LINKEDIN CONNECT</button>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-default" data-dismiss="modal"
                  onClick = {handleSubmit(this.handleFormSubmit.bind(this))} >Submit</button>
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
