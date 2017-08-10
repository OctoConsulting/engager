import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import Select from 'react-select';
import {SplitButton, MenuItem} from 'react-bootstrap';
class Form_Event_Modal extends Component {

  constructor(props){
    super(props);
    this.state = {
      selection: ''
    };
  }
  onChangeHandler(event){
    this.setState({
      selection: event
    });
  }
  handleFormSubmit({eventName, description}){
    const type = this.state.selection;
    if (type !='' && eventName!='' && description!=''){
      const token = localStorage.getItem('token');
      this.props.addingEvent({token, type, eventName, description});
    }
  }

  render(){
    const { handleSubmit, fields: {type, eventName, description} } = this.props;
    const type_name = 'Types';
    return(
      <form >
        <div className="modal fade" id="event" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Ad hoc event Submission Form</h4>
              </div>
              <div className="modal-body">

                <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="submit-box">
                      <div className="select-box">

                        <SplitButton bsStyle="default" title={(this.state.selection!=='') ? this.state.selection : type_name} key="Default" id="split-button-basic-default"
                          onSelect={this.onChangeHandler.bind(this)}>
                          <MenuItem eventKey="Training" {...type}>Training</MenuItem>
                          <MenuItem eventKey="Conference" {...type}>Conference</MenuItem>
                          <MenuItem eventKey="Other" {...type}>Other</MenuItem>
                        </SplitButton>



                        {/*<fieldset className="form-group">
                          <input type="text1"  className="form-control"
                          placeholder="Type" {...type}/>
                          {type.error && <div className="text-error">{type.error}</div>}
                        </fieldset>*/}

                      </div>
                      <div className="form-thing">
                        <fieldset className="form-group">
                          <input type="text1" id="form1" className="form-control"
                          placeholder="Event Name" {...eventName}/>
                          {eventName.error && <div className="text-error">{eventName.error}</div>}
                        </fieldset>

                        <fieldset className="form-group">
                          <textarea type="text1" id="form2" className="form-control"
                          placeholder="Description" {...description}/>
                          {description.error && <div className="text-error">{description.error}</div>}
                        </fieldset>

                      </div>
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <div className="modal-button">
                  <button type="submit" className="btn btn-primary" data-dismiss="modal"
                    onClick={handleSubmit(this.handleFormSubmit.bind(this))}>SUBMIT</button>
                  <button type="button" className="btn btn-default" data-dismiss="modal">CANCEL</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function validateInput(values){
  const errors ={};

  if (!values.type){
    errors.type = "Please enter an event type";
  }
  if (!values.eventName){
    errors.eventName = "Please enter an event name";
  }
  if (!values.description){
    errors.description = "Please enter a short description of the event";
  }


  return errors;
}


export default reduxForm({
  form: 'event',
  fields: [
    'type',
    'eventName',
    'description'
  ],
  validateInput
}, null, actions) (Form_Event_Modal);
