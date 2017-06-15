//BANNER IS ITS OWN THING BECAUSE WE NEED TO RENDER IT SEPARATELY
//FROM OTHERS SINCE IT NEEDS TO BE PERSISTENT

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Log_In/components/Title';

class Nav_Bar extends Component{
  render(){
    return(
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a target="_blank" href="#" className="navbar-brand" style={{marginTop: "6px"}}>ENGAGE</a>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><a href="#">Home</a></li>
                 </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <span className="glyphicon glyphicon-user" style={{paddingRight:"5px"}}></span>
                            <strong>Salman</strong>
                            <span className="glyphicon glyphicon-chevron-down" style={{paddingLeft:"5px"}}></span>
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className="navbar-login">
                                    <div className="row">
                                        <div className="col-lg-4">
                                            <p className="text-center">
                                                <span className="glyphicon glyphicon-user icon-size"></span>
                                            </p>
                                        </div>
                                        <div className="col-lg-8">
                                            <p className="text-left"><strong>Salman Khan</strong></p>
                                            <p className="text-left small">crazytodevelop@@gmail.com</p>
                                            <p className="text-left">
                                                <a href="#" className="btn btn-primary btn-block btn-sm">Profile</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="divider navbar-login-session-bg"></li>
                            <li><a href="#">Account Settings <span className="glyphicon glyphicon-cog pull-right"></span></a></li>
                            <li className="divider"></li>
                            <li><a href="#">User stats <span className="glyphicon glyphicon-stats pull-right"></span></a></li>
                            <li className="divider"></li>
                            <li><a href="#">Sign Out <span className="glyphicon glyphicon-log-out pull-right"></span></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
};

export default Nav_Bar;
