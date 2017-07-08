import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';

class Form_Twitter extends Component {

  Default(event){
    event.preventDefault();
  }

  handleFormSubmit({username}){
    const type = 'Twitter';
    const token = localStorage.getItem('token');
    this.props.socialmedia_integrate({type, token ,username});
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
                <button type="submit" className="btn btn-default" data-dismiss="modal"
                  onClick= {handleSubmit(this.handleFormSubmit.bind(this))}>Submit</button>
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
}, null, actions) (Form_Twitter);