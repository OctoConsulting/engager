//BANNER IS ITS OWN THING BECAUSE WE NEED TO RENDER IT SEPARATELY
//FROM OTHERS SINCE IT NEEDS TO BE PERSISTENT

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';



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
                    <a target="_blank" href="#" className="navbar-brand">My App.</a>
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                         <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">DropDown
                            <span className="caret"></span>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Link 2</a></li>
                            </ul>
                         </li>
                     </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                <span className="glyphicon glyphicon-user"></span>
                                <strong>Salman</strong>
                                <span className="glyphicon glyphicon-chevron-down"></span>
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
                                                    <Link to="/Per_Profile"  className="btn btn-primary btn-block btn-sm">Profile</Link>
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
                    <li><a href="#">Messages <span className="badge pull-right"> 42 </span></a></li>
                    <li className="divider"></li>
                    <li><a href="#">Favourites Snippets <span className="glyphicon glyphicon-heart pull-right"></span></a></li>
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
