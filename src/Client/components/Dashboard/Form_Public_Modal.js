import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';
import Select from 'react-select';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { SplitButton, MenuItem } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Form_Twitter from '../Per_Profile/components/Form_Twitter';
import Form_GitHub from '../Per_Profile/components/Form_GitHub';
import Form_GitHub_OAuth from '../Per_Profile/components/Form_GitHub_OAuth';
import Form_StackOverflow from '../Per_Profile/components/Form_StackOverflow';
import Form_Facebook from '../Per_Profile/components/Form_Facebook';
import Form_Instagram from '../Per_Profile/components/Form_Instagram';
import Form_Linkedin from '../Per_Profile/components/Form_Linkedin';
import Form_Event from '../Per_Profile/components/Form_Event';
import Form_JsFiddle from '../Per_Profile/components/Form_JsFiddle';


class Form_Public_Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      userInfo: this.props.userInfo
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      user_id: nextProps.user_id,
      userInfo: nextProps.userInfo
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

  render(){
    return(
      <form >
        <div className="modal fade" id="publicProfile" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header" id="submission-form">
                <h4 className="modal-title">{(this.state.userInfo !== null) ? this.state.userInfo.name : ''}</h4>
              </div>


              <div className="modal-body">
                <div className="row text-center">



                  <span className="col-md-4 col-sm-2 col-xs-2 inner-all no-margin">
                    <div className="panel rounded shadow">
                      <div className="panel-heading text-center bg-instagram">
                        <p className="inner-all no-margin">
                          <i className="fa fa-instagram fa-5x"></i>
                        </p>
                      </div>
                      <div className="panel-body text-center">
                        <strong> {(this.state.userInfo !== null) ? this.state.userInfo.instagram.username : ''} </strong> <br />
                        actions: {(this.state.userInfo !== null) ? this.state.userInfo.instagram.actions : ''} <br />
                        points: {(this.state.userInfo !== null) ? this.state.userInfo.instagram.points : ''}
                      </div>
                    </div>
                  </span>


                  <span className="col-md-4 col-sm-2 col-xs-2 inner-all no-margin">
                    <div className="panel rounded shadow">
                      <div className="panel-heading text-center bg-twitter">
                        <p className="inner-all no-margin">
                          <i className="fa fa-twitter fa-5x"></i>
                        </p>
                      </div>
                      <div className="panel-body text-center">
                        <strong> {(this.state.userInfo !== null) ? this.state.userInfo.twitter.username : ''} </strong> <br />
                        actions: {(this.state.userInfo !== null) ? this.state.userInfo.twitter.actions : ''} <br />
                        points: {(this.state.userInfo !== null) ? this.state.userInfo.twitter.points : ''}
                      </div>
                    </div>
                  </span>


                  <span className="col-md-4 col-sm-2 col-xs-2 inner-all no-margin">
                    <div className="panel rounded shadow">
                      <div className="panel-heading text-center bg-stackOverFlow">
                        <p className="inner-all no-margin">
                          <i className="fa fa-stack-overflow fa-5x"></i>
                        </p>
                      </div>
                      <div className="panel-body text-center">
                        <strong> {(this.state.userInfo !== null) ? this.state.userInfo.stackoverflow.username : ''} </strong> <br />
                        actions: {(this.state.userInfo !== null) ? this.state.userInfo.stackoverflow.actions : ''} <br />
                        points: {(this.state.userInfo !== null) ? this.state.userInfo.stackoverflow.points : ''}
                      </div>
                    </div>
                  </span>


                  <span className="col-md-4 col-sm-2 col-xs-2 inner-all no-margin">
                    <div className="panel rounded shadow">
                      <div className="panel-heading text-center bg-jsFiddle">
                        <p className="inner-all no-margin">
                          <i className="fa fa-jsfiddle fa-5x"></i>
                        </p>
                      </div>
                      <div className="panel-body text-center">
                        <strong> {(this.state.userInfo !== null) ? this.state.userInfo.jsfiddle.username : ''} </strong> <br />
                        actions: {(this.state.userInfo !== null) ? this.state.userInfo.jsfiddle.actions : ''} <br />
                        points: {(this.state.userInfo !== null) ? this.state.userInfo.jsfiddle.points : ''}
                      </div>
                    </div>
                  </span>
                  

                  <span className="col-md-4 col-sm-2 col-xs-2 inner-all no-margin">
                    <div className="panel rounded shadow">
                      <div className="panel-heading text-center bg-facebook">
                        <p className="inner-all no-margin">
                          <i className="fa fa-facebook fa-5x"></i>
                        </p>
                      </div>
                      <div className="panel-body text-center">
                        <strong> {(this.state.userInfo !== null) ? this.state.userInfo.facebook.username : ''} </strong> <br />
                        actions: {(this.state.userInfo !== null) ? this.state.userInfo.facebook.actions : ''} <br />
                        points: {(this.state.userInfo !== null) ? this.state.userInfo.facebook.points : ''}
                      </div>
                    </div>
                  </span>


                  <span className="col-md-4 col-sm-2 col-xs-2 inner-all no-margin">
                    <div className="panel rounded shadow">
                      <div className="panel-heading text-center bg-github">
                        <p className="inner-all no-margin">
                          <i className="fa fa-github fa-5x"></i>
                        </p>
                      </div>
                      <div className="panel-body text-center">
                        <strong> {(this.state.userInfo !== null) ? this.state.userInfo.github.username : ''} </strong> <br />
                        actions: {(this.state.userInfo !== null) ? this.state.userInfo.github.actions : ''} <br />
                        points: {(this.state.userInfo !== null) ? this.state.userInfo.github.points : ''}
                      </div>
                    </div>
                  </span>

                  <span className="col-md-4 col-sm-2 col-xs-2 inner-all no-margin">
                    <div className="panel rounded shadow">
                      <div className="panel-heading text-center bg-linkedin">
                        <p className="inner-all no-margin">
                          <i className="fa fa-linkedin fa-5x"></i>
                        </p>
                      </div>
                      <div className="panel-body text-center">
                        <strong> {(this.state.userInfo !== null) ? this.state.userInfo.linkedin.username : ''} </strong> <br />
                        actions: {(this.state.userInfo !== null) ? this.state.userInfo.linkedin.actions : ''} <br />
                        points: {(this.state.userInfo !== null) ? this.state.userInfo.linkedin.points : ''}
                      </div>
                    </div>
                  </span>


                </div>

                <div className="row">
                  <div className="col-md-12 col-sm-12 col-xs-12">
                    <BootstrapTable data={(this.state.userInfo !== null) ? this.state.userInfo.events.data : null} search={true} pagination bordered>
                      <TableHeaderColumn dataField='date' dataSort={true} isKey={true} dataFormat={this.dateFormatter}>Date</TableHeaderColumn>
                      <TableHeaderColumn dataField='type' dataSort={true}>Type</TableHeaderColumn>
                      <TableHeaderColumn dataField='eventName' dataSort={true}>Name</TableHeaderColumn>
                      <TableHeaderColumn dataField='description' dataSort={true}>Description</TableHeaderColumn>
                      <TableHeaderColumn dataField='expiration' dataSort={true} >Exp. Date</TableHeaderColumn>
                    </BootstrapTable>
                  </div>
                </div>


              </div>
              <div className="modal-footer">

              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}


function mapStateToProps(state) {
  return {
    user_id: state.auth.public_user_id,
    userInfo: state.auth.public_user_info
  };
}

export default connect(mapStateToProps, actions)(Form_Public_Modal);
