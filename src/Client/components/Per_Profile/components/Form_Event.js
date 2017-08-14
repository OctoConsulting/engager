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

  componentWillReceiveProps(nextProps){
    this.setState({
      eventList: nextProps.events
    });
  }

  dateFormatter(cell, row){
    const UTC_time = new Date(Number(cell)*1000).toLocaleDateString();
    return UTC_time;
  }

  expFormatter(cell, row){
    const time = Date.parse(cell);
    const formatted = new Date(time).toLocaleDateString();
    return formatted;
  }

  afterDeleteRow(rows){
    let timestamp = '';
    const token = localStorage.getItem('token');
    for (var i =0 ; i<rows.length; i++){
      timestamp = rows[i];
      this.props.deletingEvent({token, timestamp});
    }
  }

  render(){
    const options = {
      afterDeleteRow: this.afterDeleteRow.bind(this)
    };
    const selectRow = {
      mode: 'checkbox',
      bgColor: '#006600',
      clickToSelect: true
    };
    return(
        <div className="event-box">
          <Form_Event_Modal/>

          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel rounded shadow">
              <div id="table-thing">
                <h4><strong>Past Training & Conference Information</strong></h4>
              </div>

              <button type="button" className="btn btn-primary" id="add-button" data-toggle="modal" data-target="#event" data-dismiss="modal"><span id="add-word"><span className="glyphicon glyphicon-plus"></span>Add</span></button>

              <BootstrapTable data={this.state.eventList}  search={true}  selectRow={selectRow} deleteRow options={options} pagination bordered>
                <TableHeaderColumn dataField='date' dataSort={true} isKey={true} dataFormat={this.dateFormatter}>Date</TableHeaderColumn>
                <TableHeaderColumn dataField='type' dataSort={true}>Type</TableHeaderColumn>
                <TableHeaderColumn dataField='eventName' dataSort={true}>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='description' dataSort={true}>Description</TableHeaderColumn>
                <TableHeaderColumn dataField='expiration' dataSort={true} >Exp. Date</TableHeaderColumn>
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
