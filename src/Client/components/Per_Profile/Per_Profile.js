import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { reduxForm } from 'redux-form';
import jwt from 'jwt-simple';
import config from '../../../Server/config';


import Form_Twitter from './components/Form_Twitter';
import Form_GitHub from './components/Form_GitHub';
import Form_StackOverflow from './components/Form_StackOverflow';
import Form_Facebook from './components/Form_Facebook';
import Form_Event from './components/Form_Event';
import Form_Linkedin from './components/Form_Linkedin';
import Avatar from 'react-avatar';
import NavBar from '../../Nav_Bar';



class Per_Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      modified: this.props.personalInfo
    };

  }

  componentWillReceiveProps(nextProps){
    this.setState({
      modified: nextProps.personalInfo
    });
  }

  openLinkedinWindow(){
    const token = localStorage.getItem('token');
    const user_id = jwt.decode(token, config.secret);
    let testWindow = window.open(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=778l6ot4kvtw5r&redirect_uri=http%3A%2F%2Flocalhost:3090/authLinkedin&state=${user_id.sub}&scope=r_basicprofile,r_emailaddress`, "Linkedin Authorization", "titlebar=yes, width=500, height=450");
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
                    <button className="btn btn-facebook btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#facebook">
                        <span>{(this.state.modified !== null && this.state.modified.facebook != '') ? this.state.modified.facebook : connect}</span>
                    </button>
                    <Form_Facebook/>
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
                        <span>{(this.state.modified !== null && this.state.modified.twitter != '') ? this.state.modified.twitter : connect}</span>
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
                        <span>{(this.state.modified !== null && this.state.modified.stackoverflow != '') ? this.state.modified.stackoverflow : connect}</span>
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
                        <span>{(this.state.modified !== null && this.state.modified.instagram != '') ? this.state.modified.instagram : connect}</span>
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
                        <span>{(this.state.modified !== null && this.state.modified.github != '') ? this.state.modified.github : connect}</span>
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
                    <button className="btn btn-linkedin btn-icon-stacked btn-stroke" onClick={this.openLinkedinWindow}>
                        <span>{(this.state.modified !== null && this.state.modified.linkedin != '') ? this.state.modified.linkedin : connect}</span>
                    </button>
                    {/*<Form_Linkedin/>*/}
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
    personalInfo: state.auth.userInfo
  };
}

//Connect the reducer to the container
export default connect(mapStateToProps, actions) (Per_Profile);
