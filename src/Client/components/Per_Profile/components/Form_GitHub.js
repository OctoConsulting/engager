import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';

class Form_GitHub extends Component {

  handleFormSubmit({username}){
    const type = 'GitHub';
    const token = localStorage.getItem('token');
    this.props.socialmedia_auth({type, token ,username});
  }

  deauthGitHub(){
    const type = 'github';
    const token = localStorage.getItem('token');
    this.props.socialmedia_deauth({type, token});
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
                <input className="form-control" type="text" placeholder="Github Username" {...username}></input>
              </div>
              <div className="modal-footer">
                <div className="modal-button">
                  <button type="submit" className="btn btn-primary" data-dismiss="modal"
                    onClick= {handleSubmit(this.handleFormSubmit.bind(this))}>CONNECT</button>

                    <button type="button" className="btn btn-warning" data-dismiss="modal"
                      onClick= {this.deauthGitHub.bind(this)}>DISCONNECT</button>
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
}, null, actions) (Form_GitHub);
