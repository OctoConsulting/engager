import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';
import jwt from 'jwt-simple';
import config from '../../../Server/config';


import Form_Twitter from './components/Form_Twitter';
import Form_GitHub from './components/Form_GitHub';
import Form_GitHub_OAuth from './components/Form_GitHub_OAuth';
import Form_StackOverflow from './components/Form_StackOverflow';
import Form_Facebook from './components/Form_Facebook';
import Form_Instagram from './components/Form_Instagram';
import Form_Linkedin from './components/Form_Linkedin';
import Form_Event from './components/Form_Event';
import Form_JsFiddle from './components/Form_JsFiddle';

import Avatar from 'react-avatar';
import NavBar from '../../Nav_Bar';



class Per_Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      modified: this.props.personalInfo,
      facebook: this.props.facebook,
      twitter: this.props.twitter,
      stackoverflow: this.props.stackoverflow,
      jsfiddle: this.props.jsfiddle,
      instagram: this.props.instagram,
      github: this.props.github,
      linkedin: this.props.linkedin
    };

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      modified: nextProps.personalInfo,
      facebook: nextProps.facebook,
      twitter: nextProps.twitter,
      stackoverflow: nextProps.stackoverflow,
      jsfiddle: nextProps.jsfiddle,
      instagram: nextProps.instagram,
      github: nextProps.github,
      linkedin: nextProps.linkedin
    });
  }


  render(){
    const connect = 'Connect';
    return(
      <div>
        <NavBar />
        <div  className="container personal-profile-container">
          <div className="row">
            <div className="col-md-12 profile-card">
              <div className="profile-cover">
               <div className="profile-avatar">
                  <img src={(this.state.modified !== null) ? this.state.modified.avatar : ''} alt={(this.state.modified !== null) ? this.state.modified.name : ''} />
               </div>
               <div className="profile-details">
                   <h1>{(this.state.modified !== null) ? this.state.modified.name : ''}</h1>
                   <h6>{(this.state.modified !== null) ? this.state.modified.email : ''}</h6>
               </div>
             </div>
           </div>
         </div>
          <div className="row">
            {/*
              #############################################################
              #                                                           #
              #                     INSTAGRAM INTEGRATION                 #
              #                                                           #
              #############################################################
              */}
            <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-instagram">
                      <p className="inner-all no-margin">
                          <i className="fa fa-instagram fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-instagram btn-icon-stacked btn-stroke"
                      data-toggle="modal" data-target="#instagram">
                        <span>{(this.state.instagram !== null && this.state.instagram != '') ? this.state.instagram : connect}</span>
                    </button>
                    <Form_Instagram />
                  </div>
                </div>
            </div>
            {/*
              #############################################################
              #                                                           #
              #                      TWITTER INTEGRATION                  #
              #                                                           #
              #############################################################
              */}
            <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-twitter">
                      <p className="inner-all no-margin">
                          <i className="fa fa-twitter fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-twitter btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#twitter">
                        <span>{(this.state.twitter !== null && this.state.twitter != '') ? this.state.twitter : connect}</span>
                    </button>
                    <Form_Twitter/>
                  </div>
                </div>
            </div>

            {/*
              #############################################################
              #                                                           #
              #                  STACKOVERFLOW INTEGRATION                #
              #                                                           #
              #############################################################
              */}

            <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-stackOverFlow">
                      <p className="inner-all no-margin">
                          <i className="fa fa-stack-overflow fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-stackOverFlow btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#stackoverflow">
                        <span>{(this.state.stackoverflow !== null && this.state.stackoverflow != '') ? this.state.stackoverflow : connect}</span>
                    </button>
                    <Form_StackOverflow />
                  </div>
                </div>
            </div>


            {/*
              #############################################################
              #                                                           #
              #                   JSFIDDLE INTEGRATION                    #
              #                                                           #
              #############################################################
              */}

            <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-jsFiddle">
                      <p className="inner-all no-margin">
                          <i className="fa fa-jsfiddle fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-jsFiddle btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#jsfiddle">
                        <span>{(this.state.jsfiddle !== null && this.state.jsfiddle != '') ? this.state.jsfiddle : connect}</span>
                    </button>
                    <Form_JsFiddle />
                  </div>
                </div>
                </div>
            </div>


            <div className="row">



            {/*
              #############################################################
              #                                                           #
              #                     FACEBOOK INTEGRATION                  #
              #                                                           #
              #############################################################
              */}
            <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-facebook">
                      <p className="inner-all no-margin">
                          <i className="fa fa-facebook fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-facebook btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#facebook">
                        <span>{(this.state.facebook !== null && this.state.facebook != '') ? this.state.facebook : connect}</span>
                    </button>
                    <Form_Facebook/>
                  </div>
                </div>
            </div>
            {/*
              #############################################################
              #                                                           #
              #                       GITHUB INTEGRATION                  #
              #                                                           #
              #############################################################
              */}

            <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-github">
                      <p className="inner-all no-margin">
                          <i className="fa fa-github fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-github btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#github">
                        <span>{(this.state.github !== null && this.state.github != '') ? this.state.github : connect}</span>
                    </button>

                    <Form_GitHub_OAuth />

                  </div>

            </div>
          </div>
            {/*
              #############################################################
              #                                                           #
              #                     LINKEDIN INTEGRATION                  #
              #                                                           #
              #############################################################
              */}
              <div className="col-md-3 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-linkedin">
                      <p className="inner-all no-margin">
                          <i className="fa fa-linkedin fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-linkedin btn-icon-stacked btn-stroke"
                      data-toggle="modal" data-target="#linkedin">
                        <span>{(this.state.linkedin !== null && this.state.linkedin != '') ? this.state.linkedin : connect}</span>
                    </button>

                    <Form_Linkedin/>

                  </div>
                </div>
              </div>

              {/*
                #############################################################
                #                                                           #
                #                      EVENT INTEGRATION                    #
                #                                                           #
                #############################################################
                */}
                <div className="col-md-3 col-sm-4 col-xs-6">
                  <div className="panel rounded shadow">
                    <div className="panel-heading text-center bg-event">
                        <p className="inner-all no-margin">
                            <i className="fa fa-calendar fa-5x"></i>
                        </p>
                    </div>
                    <div className="panel-body text-center">
                      <button className="btn btn-linkedin btn-icon-stacked btn-stroke"
                        data-toggle="modal" data-target="#event">
                          <span>Add an event</span>
                      </button>

                      <Form_Linkedin/>

                    </div>
                  </div>
                </div>
          </div>
          <Form_Event />
        </div>
    </div>
      );
    }
}

//   //Mapping the state to props for using inside the class
function mapStateToProps(state){
  return {
    personalInfo: state.auth.userInfo,
    facebook: state.integration.facebook,
    twitter: state.integration.twitter,
    stackoverflow: state.integration.stackoverflow,
    instagram: state.integration.instagram,
    github: state.integration.github,
    linkedin: state.integration.linkedin,
    jsfiddle: state.integration.jsfiddle
  };
}

//Connect the reducer to the container
export default connect(mapStateToProps, actions) (Per_Profile);
