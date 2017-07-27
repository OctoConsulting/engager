import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';
import Select from 'react-select';

class Form_Event extends Component {
  constructor(props){
    super(props);
    this.state = {
      eventList: this.props.events,
      formSelectState: "one"
    };
  }
  componentWillMount(){
    const token = localStorage.getItem('token');
    this.props.retrieveEvents(token);
  }
  handleFormSubmit({type, eventName, description}){
    console.log(type);
    console.log(eventName);
    const token = localStorage.getItem('token');
    this.props.addingEvent({token, type, eventName, description});
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      eventList: nextProps.events
    });
  }

  logChange(val){
    this.setState({
      formSelectState: val.value
    });
    console.log('Selected: ' + JSON.stringify(val));
  }

  render(){
    const options = [
      {value: 'Training', label: 'Training'},
      {value: 'Conference', label: 'Conference'},
      {value: 'Meet Up', label: 'Meet Up'}
    ];
    const { handleSubmit, fields: {type, eventName, description} } = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="event-box">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="submit-box">
                <div className="select-box">
                  <fieldset className="form-group">
                    <input type="text1"  className="form-control"
                    placeholder="Type" {...type}/>
                  </fieldset>
                </div>
                <div className="form-thing">
                  <fieldset className="form-group">
                    <input type="text1" id="form1" className="form-control"
                    placeholder="Event Name" {...eventName}/>
                  </fieldset>

                  <fieldset className="form-group">
                    <textarea type="text1" id="form2" className="form-control"
                    placeholder="Description" {...description}/>
                  </fieldset>

                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
          </div>

          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="panel rounded shadow">
              <BootstrapTable data={this.state.eventList}  search={ true } pagination striped hover bordered>
                <TableHeaderColumn dataField='type' isKey={ true }>Type</TableHeaderColumn>
                <TableHeaderColumn dataField='eventName'>Event Name</TableHeaderColumn>
                <TableHeaderColumn dataField='description'>Description</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

//   //Mapping the state to props for using inside the class
function mapStateToProps(state){
  return {
    events: state.auth.events
  };
}

export default reduxForm({
  form: 'event',
  fields: [
    'type',
    'eventName',
    'description'
  ]
}, mapStateToProps, actions) (Form_Event);
