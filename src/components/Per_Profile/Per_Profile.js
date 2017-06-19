import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Avatar from './components/Avatar';
import Bio from './components/Bio';
import Social_Media from './components/Social_Media';
import Title from '../Log_In/components/Title';
import NavBar from '../../Nav_Bar';


const dummy_data = {
      "Name": "John Doe",
      "Title": "Developer",
      "Integrations": ["Twitter", "Facebook", "LinkedIn"]
}



const Per_Profile = () => {
  return(
    <div className="">
      <NavBar></NavBar>
      <div  className="container personal-profile-container">
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
                <div className="panel-heading text-center bg-facebook">
                    <p className="inner-all no-margin">
                        <i className="fa fa-facebook fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                    <p className="h4 no-margin inner-all text-strong">
                        <span className="block">5,634</span>
                        <span className="block">Like</span>
                    </p>
                </div>
              </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-facebook">
                    <p className="inner-all no-margin">
                        <i className="fa fa-facebook fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                    <p className="h4 no-margin inner-all text-strong">
                        <span className="block">5,634</span>
                        <span className="block">Like</span>
                    </p>
                </div>
              </div>
          </div>
          <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="panel rounded shadow">
                <div className="panel-heading text-center bg-facebook">
                    <p className="inner-all no-margin">
                        <i className="fa fa-facebook fa-5x"></i>
                    </p>
                </div>
                <div className="panel-body text-center">
                    <p className="h4 no-margin inner-all text-strong">
                        <span className="block">5,634</span>
                        <span className="block">Like</span>
                    </p>
                </div>
              </div>
          </div>
      </div>
      </div>
    </div>
  );

}

export default Per_Profile;
