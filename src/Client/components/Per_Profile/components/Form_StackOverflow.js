import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';

class Form_StackOverflow extends Component {

  handleFormSubmit({username}){
    const type = 'StackOverflow';
    const token = localStorage.getItem('token');
    this.props.socialmedia_integrate({type, token ,username});
  }

  render(){
    const {fields: {username}, handleSubmit} = this.props;
    return(
        <div className="modal fade" id="stackoverflow" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Github</h4>
              </div>
              <div className="modal-body">
                <input className="form-control" type="text" placeholder="StackOverflow User ID" {...username}></input>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal"
                  onClick= {handleSubmit(this.handleFormSubmit.bind(this))}>Submit</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default reduxForm({
  form: 'stackoverflowForm',
  fields: [
    'username'
  ]
}, null, actions) (Form_StackOverflow);
