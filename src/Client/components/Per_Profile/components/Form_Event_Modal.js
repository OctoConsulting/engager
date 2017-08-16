import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import Select from 'react-select';
import {SplitButton, MenuItem} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
  handleFormSubmit({enteredDate, eventName, description, expiration}){
    const type = this.state.selection;
    const token = localStorage.getItem('token');
    if (enteredDate!=='' && type !='' && eventName!='' && description!=''){
      if (type === "Certification"){
        enteredDate = "N/A";
        this.props.addingEvent({token, enteredDate, type, eventName, description, expiration});
      }
      else{
        expiration = "N/A";
        this.props.addingEvent({token, enteredDate, type, eventName, description, expiration});
      }
    }
  }

  render(){
    const { handleSubmit, fields: {enteredDate, type, eventName, description, expiration} } = this.props;
    const type_name = 'Types';
    const expiration_box = (this.state.selection === "Certification") ? <fieldset className="form-group">
      <input type="text1" className="form-control"
      placeholder="Expiration Date" {...expiration}/>
      {description.error && <div className="text-error">{description.error}</div>}
    </fieldset> : null;

    const input_date = (this.state.selection !== '' && this.state.selection !== 'Certification') ? <fieldset className="form-group">
      <input type="text1" className="form-control"
      placeholder="MM/DD/YYYY"
      {...enteredDate}/>
    </fieldset> : null;
    return(
      <form >
        <div className="modal fade" id="event" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header" id="submission-form">
                <h4 className="modal-title">Event Submission</h4>
              </div>
              <div className="modal-body">

                  <div className="submit-box">
                    <div id="split-thing">
                      <SplitButton bsStyle="primary" title={(this.state.selection!=='') ? this.state.selection : type_name} key="Primary" id="split-button-basic-primary"
                        onSelect={this.onChangeHandler.bind(this)}>
                        <MenuItem eventKey="Certification" {...type}>Certification</MenuItem>
                        <MenuItem eventKey="Training" {...type}>Training</MenuItem>
                        <MenuItem eventKey="Conference" {...type}>Conference</MenuItem>
                        <MenuItem eventKey="Other" {...type}>Other</MenuItem>
                      </SplitButton>
                    </div>

                        {input_date}

                        <fieldset className="form-group">
                          <input type="text1" className="form-control"
                          placeholder="Name" {...eventName}/>
                          {eventName.touched && eventName.error && <div className="text-error">{eventName.error}</div>}
                        </fieldset>

                        <fieldset className="form-group">
                          <textarea type="text1" className="form-control"
                          placeholder="Description" {...description}/>
                          {description.error && <div className="text-error">{description.error}</div>}
                        </fieldset>

                        {expiration_box}
                  </div>


              </div>
              <div className="modal-footer">
                <div className="modal-button">
                  <button type="submit" className="btn btn-primary" data-dismiss="modal"
                    onClick={handleSubmit(this.handleFormSubmit.bind(this))}>SUBMIT</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">CANCEL</button>
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
    'enteredDate',
    'eventName',
    'description',
    'expiration'
  ],
  validateInput
}, null, actions) (Form_Event_Modal);
