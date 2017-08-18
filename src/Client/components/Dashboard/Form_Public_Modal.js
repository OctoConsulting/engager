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
      userInfo: this.props.userInfo,
      userScores: this.props.userScores,
      selectedOption: 'alltime'
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      userInfo: nextProps.userInfo,
      userScores: nextProps.userScores
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

  handleSelection(event){
    this.setState({
      selectedOption: event.target.value
    });
    let type;
    if (event.target.value === 'weekly'){
      type = 'weekly';
    }
    else if (event.target.value === 'monthly'){
      type = 'monthly';
    }
    else{
      type = 'alltime';
    }
    const token = this.state.userInfo.profile.token;
    this.props.retrievePublicUserScore({type, token});
  }

  render(){

    {/*ALL THE CONNECTIONS WILL ONLY DISPLAY WHEN IT IS CONNECTED. HIDDEN OTHERWISE*/}

    const instagram_connect = (this.state.userScores !== null && this.state.userScores.instagram.username !== '') ? <span className="col-md-3 col-sm-6 col-xs-12 inner-all no-margin">
      <div className="panel rounded shadow">
        <div className="panel-heading text-center bg-instagram">
          <p className="inner-all no-margin">
            <i className="fa fa-instagram fa-5x"></i>
          </p>
        </div>
        <div className="panel-body text-center">
          <strong> {(this.state.userScores !== null) ? this.state.userScores.instagram.username : ''} </strong> <br />
          actions: {(this.state.userScores !== null) ? this.state.userScores.instagram.actions : ''} <br />
          points: {(this.state.userScores !== null) ? this.state.userScores.instagram.points : ''}
        </div>
      </div>
    </span> : null;

    const twitter_connect = (this.state.userScores !== null && this.state.userScores.twitter.username !== '') ? <span className="col-md-3 col-sm-6 col-xs-12 inner-all no-margin">
      <div className="panel rounded shadow">
        <div className="panel-heading text-center bg-twitter">
          <p className="inner-all no-margin">
            <i className="fa fa-twitter fa-5x"></i>
          </p>
        </div>
        <div className="panel-body text-center">
          <strong> {(this.state.userScores !== null) ? this.state.userScores.twitter.username : ''} </strong> <br />
          actions: {(this.state.userScores !== null) ? this.state.userScores.twitter.actions : ''} <br />
          points: {(this.state.userScores !== null) ? this.state.userScores.twitter.points : ''}
        </div>
      </div>
    </span> : null;

    const stackoverflow_connect = (this.state.userScores !== null && this.state.userScores.stackoverflow.username !== '') ? <span className="col-md-3 col-sm-6 col-xs-12 inner-all no-margin">
      <div className="panel rounded shadow">
        <div className="panel-heading text-center bg-stackOverFlow">
          <p className="inner-all no-margin">
            <i className="fa fa-stack-overflow fa-5x"></i>
          </p>
        </div>
        <div className="panel-body text-center">
          <strong> {(this.state.userScores !== null) ? this.state.userScores.stackoverflow.username : ''} </strong> <br />
          actions: {(this.state.userScores !== null) ? this.state.userScores.stackoverflow.actions : ''} <br />
          points: {(this.state.userScores !== null) ? this.state.userScores.stackoverflow.points : ''}
        </div>
      </div>
    </span> : null;

    const jsfiddle_connect = (this.state.userScores !== null && this.state.userScores.jsfiddle.username !== '') ? <span className="col-md-3 col-sm-6 col-xs-12 inner-all no-margin">
      <div className="panel rounded shadow">
        <div className="panel-heading text-center bg-jsFiddle">
          <p className="inner-all no-margin">
            <i className="fa fa-jsfiddle fa-5x"></i>
          </p>
        </div>
        <div className="panel-body text-center">
          <strong> {(this.state.userScores !== null) ? this.state.userScores.jsfiddle.username : ''} </strong> <br />
          actions: {(this.state.userScores !== null) ? this.state.userScores.jsfiddle.actions : ''} <br />
          points: {(this.state.userScores !== null) ? this.state.userScores.jsfiddle.points : ''}
        </div>
      </div>
    </span> : null;


    const facebook_connect = (this.state.userScores !== null && this.state.userScores.facebook.username !== '') ? <span className="col-md-3 col-sm-6 col-xs-12 inner-all no-margin">
      <div className="panel rounded shadow">
        <div className="panel-heading text-center bg-facebook">
          <p className="inner-all no-margin">
            <i className="fa fa-facebook fa-5x"></i>
          </p>
        </div>
        <div className="panel-body text-center">
          <strong> {(this.state.userScores !== null) ? this.state.userScores.facebook.username : ''} </strong> <br />
          actions: {(this.state.userScores !== null) ? this.state.userScores.facebook.actions : ''} <br />
          points: {(this.state.userScores !== null) ? this.state.userScores.facebook.points : ''}
        </div>
      </div>
    </span> : null;

    const github_connect = (this.state.userScores !== null && this.state.userScores.github.username !== '') ? <span className="col-md-3 col-sm-6 col-xs-12 inner-all no-margin">
      <div className="panel rounded shadow">
        <div className="panel-heading text-center bg-github">
          <p className="inner-all no-margin">
            <i className="fa fa-github fa-5x"></i>
          </p>
        </div>
        <div className="panel-body text-center">
          <strong> {(this.state.userScores !== null) ? this.state.userScores.github.username : ''} </strong> <br />
          actions: {(this.state.userScores !== null) ? this.state.userScores.github.actions : ''} <br />
          points: {(this.state.userScores !== null) ? this.state.userScores.github.points : ''}
        </div>
      </div>
    </span> : null;

    const linkedin_connect = (this.state.userScores !== null && this.state.userScores.linkedin.username !== '') ? <span className="col-md-3 col-sm-6 col-xs-12 inner-all no-margin">
      <div className="panel rounded shadow">
        <div className="panel-heading text-center bg-linkedin">
          <p className="inner-all no-margin">
            <i className="fa fa-linkedin fa-5x"></i>
          </p>
        </div>
        <div className="panel-body text-center">
          <strong> {(this.state.userScores !== null) ? this.state.userScores.linkedin.username : ''} </strong> <br />
          actions: {(this.state.userScores !== null) ? this.state.userScores.linkedin.actions : ''} <br />
          points: {(this.state.userScores !== null) ? this.state.userScores.linkedin.points : ''}
        </div>
      </div>
    </span> : null;

    {/*DISPLAY THE TABLE ONLY WHEN THERE'S DATA. OTHERWISE SHOW A MESSAGE*/}
    const table = (this.state.userInfo !== null && this.state.userInfo.events.data.length !== 0) ? (<div className="col-md-12 col-sm-12 col-xs-12">
      <h4 id="event-title">Logged Events</h4>
      <br/>
      <BootstrapTable data={(this.state.userInfo !== null) ? this.state.userInfo.events.data : null} search={true}  options={options} pagination bordered>
        <TableHeaderColumn dataField='date' dataSort={true} isKey={true} dataFormat={this.dateFormatter}>Date</TableHeaderColumn>
        <TableHeaderColumn dataField='type' dataSort={true}>Type</TableHeaderColumn>
        <TableHeaderColumn dataField='eventName' dataSort={true}>Name</TableHeaderColumn>
        <TableHeaderColumn dataField='description' dataSort={true}>Description</TableHeaderColumn>
        <TableHeaderColumn dataField='expiration' dataSort={true} >Exp. Date</TableHeaderColumn>
      </BootstrapTable>
    </div>) : (<div className="icon-center"><p className=" fa fa-calendar fa-5x"></p><br/><strong>This user has not logged any event.</strong></div>);


    {/*SELECTION STATEMENT TO DISPLAY EITHER THE FILTER BUTTONS WHEN THERE IS A CONNECTION
      OR THE EMPTY MESSAGE*/}
    const empty_message = (this.state.userInfo !== null && ((this.state.userInfo.profile.points - this.state.userInfo.events.points) == 0)) ? <div className="icon-center"><p className=" fa fa-plug fa-5x"></p><br/><strong>This user does not have any social media connected. Please check back later.</strong></div> : null;

    const button_bar = (this.state.userInfo !== null && ((this.state.userInfo.profile.points - this.state.userInfo.events.points) != 0)) ? (<div className="row text-center">
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="btn-group" data-toggle="radio">
          <label className="btn btn-primary">
            <input type="radio" value="weekly" autoComplete="on"
              checked={this.state.selectedOption==='weekly'}
              onChange={this.handleSelection.bind(this)}/> Weekly
            </label>
            <label className="btn btn-primary">
              <input type="radio" value="monthly" autoComplete="on"
                checked={this.state.selectedOption==='monthly'}
                onChange={this.handleSelection.bind(this)}/> Monthly
              </label>
              <label className="btn btn-primary">
                <input type="radio" value="alltime" autoComplete="on"
                  checked={this.state.selectedOption==='alltime'}
                  onChange={this.handleSelection.bind(this)}/> All time
                </label>
              </div>
        </div>
    </div>) : null;


    const options = {
      noDataText: `No Event Information`
    };

    return(
      <form >
        <div className="modal fade" id="publicProfile" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header" id="submission-form">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <div>
                  <img className="public-modal-avatar" src={(this.state.userInfo!==null)?this.state.userInfo.avatar : ''}/>
                </div>
                <strong><h4 className="modal-title">{(this.state.userScores !== null) ? this.state.userInfo.name : ''}</h4></strong>
                <strong><h5 className="modal-title">{(this.state.userScores !== null) ? this.state.userInfo.email : ''}</h5></strong>
              </div>


              <div className="modal-body">
                <div className="row">
                  {empty_message}
                  {button_bar}
                  {instagram_connect}
                  {twitter_connect}
                  {stackoverflow_connect}
                  {jsfiddle_connect}
                  {facebook_connect}
                  {github_connect}
                  {linkedin_connect}
                </div>
                <hr/>
                <div className="row">
                  {table}
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
    userInfo: state.auth.public_user_info,
    userScores: state.auth.public_user_scores
  };
}

export default connect(mapStateToProps, actions)(Form_Public_Modal);
