//BANNER IS ITS OWN THING BECAUSE WE NEED TO RENDER IT SEPARATELY
//FROM OTHERS SINCE IT NEEDS TO BE PERSISTENT
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import * as actions from './actions';

class Nav_Bar extends Component{

  componentWillMount(){
    this.props.retrieveUser(localStorage.getItem('token'));
  }

  render(){
    const user = this.props.personalInfo;
    return(
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link to="/dashboard" className="navbar-brand" style={{marginTop: "6px"}}>ENGAGE</Link>
            </div>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li><Link to="/dashboard">Home</Link></li>
                 </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                            <span className="glyphicon glyphicon-user" style={{paddingRight:"5px"}}></span>
                            <strong></strong>
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
                                            <p className="text-center"><strong>{user.name}</strong></p>
                                            <p className="text-center small">{user.email}</p>
                                            <p className="text-left">
                                                <Link to="/Profile" className="btn btn-primary btn-block btn-sm">Profile</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="divider navbar-login-session-bg"></li>
                            <li><Link className="nav-link" to="/signout">Sign Out <span className="glyphicon glyphicon-log-out pull-right"></span></Link></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
  }
};
function mapStateToProps(state){
  return {
    personalInfo: state.personalProfileInfo
  };
}

//Connect the reducer to the container
export default connect (mapStateToProps, actions) (Nav_Bar);
