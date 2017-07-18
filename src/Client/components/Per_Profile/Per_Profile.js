import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';


import Form_Twitter from './components/Form_Twitter';
import Form_GitHub from './components/Form_GitHub';
import Form_StackOverflow from './components/Form_StackOverflow';
import Avatar from 'react-avatar';
import NavBar from '../../Nav_Bar';



class Per_Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      modified: null,
      twitter: ''
    };
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      modified: nextProps.personalInfo
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
                  <img src="http://stock.wikimini.org/w/images/thumb/9/95/Gnome-stock_person-avatar-profile.png/240px-Gnome-stock_person-avatar-profile.png" alt={(this.state.modified !== null) ? this.state.modified.name : ''} />
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
                    <button className="btn btn-facebook btn-icon-stacked btn-stroke">
                        <span>{(this.state.modified !== null && this.state.modified.facebook != '') ? this.state.modified.facebook : connect}</span>
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
                    <button className="btn btn-linkedin btn-icon-stacked btn-stroke" data-toggle="modal" data-target="#linkedin">
                        <span>{(this.state.modified !== null && this.state.modified.linkedin != '') ? this.state.modified.linkedin : connect}</span>
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
