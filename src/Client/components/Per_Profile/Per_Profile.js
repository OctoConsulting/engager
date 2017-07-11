import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';


import Form_Twitter from './components/Form_Twitter';
import Form_GitHub from './components/Form_GitHub';
import Form_StackOverflow from './components/Form_StackOverflow';

import NavBar from '../../Nav_Bar';



class Per_Profile extends Component {

  render(){
    const connect = 'Connect';
    const connected = 'Connected';

    return(
      <div>
        <NavBar />
        <div  className="container personal-profile-container">
          <div className="row">
            <div className="col-md-12 profile-card">
              <div className="profile-cover">
               <div className="profile-avatar">
                  <img src="https://dl.dropboxusercontent.com/s/7pcnqq18skh1myk/avatar.jpg" alt={(this.props.personalInfo !== null) ? this.props.personalInfo.name : ''} />
               </div>
               <div className="profile-details">
                   <h1>{(this.props.personalInfo !== null) ? this.props.personalInfo.name : ''}</h1>
                   <h6>{(this.props.personalInfo !== null) ? this.props.personalInfo.email : ''}</h6>
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
            <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-facebook">
                      <p className="inner-all no-margin">
                          <i className="fa fa-facebook fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-facebook btn-icon-stacked btn-stroke">
                        <span>Connect</span>
                    </button>
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
            <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-twitter">
                      <p className="inner-all no-margin">
                          <i className="fa fa-twitter fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-twitter btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#twitter">
                        <span>{(this.props.personalInfo !== null && this.props.personalInfo.twitter_check===true) ? connected : connect}</span>
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

            <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-stackOverFlow">
                      <p className="inner-all no-margin">
                          <i className="fa fa-stack-overflow fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-stackOverFlow btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#stackoverflow">
                        <span>{(this.props.personalInfo !== null && this.props.personalInfo.stackoverflow_check===true) ? connected : connect}</span>
                    </button>

                    <Form_StackOverflow />

                  </div>
                </div>
            </div>

            {/*
              #############################################################
              #                                                           #
              #                     INSTAGRAM INTEGRATION                 #
              #                                                           #
              #############################################################
              */}

            <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-instagram">
                      <p className="inner-all no-margin">
                          <i className="fa fa-instagram fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-instagram btn-icon-stacked btn-stroke">
                        <span>Connect</span>
                    </button>
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

            <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-github">
                      <p className="inner-all no-margin">
                          <i className="fa fa-github fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-github btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#github">
                        <span>{(this.props.personalInfo !== null && this.props.personalInfo.github_check === true) ? connected : connect}</span>
                    </button>

                    <Form_GitHub />

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

            <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="panel rounded shadow">
                  <div className="panel-heading text-center bg-linkedin">
                      <p className="inner-all no-margin">
                          <i className="fa fa-linkedin fa-5x"></i>
                      </p>
                  </div>
                  <div className="panel-body text-center">
                    <button className="btn btn-linkedin btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#linkedin">
                        <span>Connect</span>
                    </button>
                    <div className="modal fade" id="linkedin" role="dialog">
                      <div className="modal-dialog">

                        {//<!-- Modal content-->
                        }
                        <div className="modal-content">
                          <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                          </div>
                          <div className="modal-body">
                            <p>Some text in the modal.</p>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Submit</button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
};

//   //Mapping the state to props for using inside the class
  function mapStateToProps(state){
    return {
      personalInfo: state.auth.userInfo
    };
  }

//Connect the reducer to the container
export default connect (mapStateToProps, actions) (Per_Profile);
