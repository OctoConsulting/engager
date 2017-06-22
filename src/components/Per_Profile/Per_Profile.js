import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Avatar from './components/Avatar';
import Bio from './components/Bio';
import Social_Media from './components/Social_Media';
import Title from '../Log_In/components/Title';
import NavBar from '../../Nav_Bar';



const Per_Profile = () => {
  return(
    <div>
      <NavBar />
      <div  className="container personal-profile-container">
        <div className="row">
          <div className="col-md-12 profile-card">
            <div className="profile-cover">
             <div className="profile-avatar">
                <img src="https://dl.dropboxusercontent.com/s/7pcnqq18skh1myk/avatar.jpg" alt="Anis M" />
             </div>
             <div className="profile-details">
                 <h1>Anis M</h1>
                 <h6>@anismashku</h6>
             </div>
           </div>
         </div>
       </div>
        <div className="row">
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-facebook">
                    <p className="inner-all no-margin">
                        <i className="fa fa-facebook fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                  <button className="btn btn-facebook btn-icon-stacked btn-stroke">
                      <span>Conect</span>
                  </button>
                </div>
              </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-twitter">
                    <p className="inner-all no-margin">
                        <i className="fa fa-twitter fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                  <button className="btn btn-twitter btn-icon-stacked btn-stroke">
                      <span>Conect</span>
                  </button>
                </div>
              </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-stackOverFlow">
                    <p className="inner-all no-margin">
                        <i className="fa fa-stack-overflow fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                  <button className="btn btn-stackOverFlow btn-icon-stacked btn-stroke">
                      <span>Conect</span>
                  </button>
                </div>
              </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-instagram">
                    <p className="inner-all no-margin">
                        <i className="fa fa-instagram fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                  <button className="btn btn-instagram btn-icon-stacked btn-stroke">
                      <span>Conect</span>
                  </button>
                </div>
              </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-github">
                    <p className="inner-all no-margin">
                        <i className="fa fa-github fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                  {  // <p className="h4 no-margin inner-all text-strong">
                    //     <span className="block">5,634</span>
                    //     <span className="block">Like</span>
                    // </p>
                  }
                  <button className="btn btn-github btn-icon-stacked btn-stroke">
                      <span>Conect</span>
                  </button>
                </div>
              </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-linkedin">
                    <p className="inner-all no-margin">
                        <i className="fa fa-linkedin fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                  <button className="btn btn-linkedin btn-icon-stacked btn-stroke">
                      <span>Conect</span>
                  </button>

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
      );
};
{/*/using 2 different methods because the default render() doesn't
//like returning an object other than a div container
  render(){
    return(
      <div>
        {this.renderItems()}
      </div>
    );

  }*/}


//Mapping the state to props for using inside the class
function mapStateToProps(state){
  return {
    personalInfo: state.personalProfileInfo
  };
}

//Connect the reducer to the container
export default connect (mapStateToProps) (Per_Profile);
