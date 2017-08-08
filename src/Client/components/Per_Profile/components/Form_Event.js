import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import Select from 'react-select';
import Form_Event_Modal from './Form_Event_Modal';

class Form_Event extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventList: this.props.events
    };
  }
  componentWillMount(){
    const token = localStorage.getItem('token');
    this.props.retrieveEvents(token);
  }
  handleFormSubmit({type, eventName, description}){
    const token = localStorage.getItem('token');
    this.props.addingEvent({token, type, eventName, description});
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      eventList: nextProps.events
    });
  }


  render(){
    return(
        <div className="event-box">
          <Form_Event_Modal/>
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel rounded shadow"  id="table-thing">
              <h4><strong>Past Training & Conference Information</strong></h4>
              <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#event" data-dismiss="modal"><span className="glyphicon glyphicon-plus-sign"></span>Add</button>
              <BootstrapTable data={this.state.eventList}  search={true}  pagination striped hover bordered>

                <TableHeaderColumn dataField='type' isKey={true} dataSort={true}>Type</TableHeaderColumn>
                <TableHeaderColumn dataField='eventName' dataSort={true}>Event Name</TableHeaderColumn>
                <TableHeaderColumn dataField='description' dataSort={true}>Description</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
    );
  }
}



//   //Mapping the state to props for using inside the class
function mapStateToProps(state){
  return {
    events: state.auth.events
  };
}

export default connect(mapStateToProps, actions) (Form_Event);
