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
    this.props.retrieveAlltimeDashboard();
  }

  render(){
    console.log(this.props.personalInfo);
    return(
      <div className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
            <div className="navbar-header">
              <div className="navbar-brand navbar-left" style={{marginTop: "6px"}}>ENGAGER</div>

                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>


            </div>
            <div className="collapse navbar-collapse navbar-right">
                <ul className="nav navbar-nav">
                    <li><Link className="btn btn-facebook btn-stacked btn-stroke" to="/dashboard">Dashboard</Link></li>
                    <li><Link className="btn btn-facebook btn-stacked btn-stroke" to="/Profile">Profile</Link></li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                  <li><Link className="btn btn-facebook btn-stacked btn-stroke" to="/signout">Sign Out</Link></li>
                </ul>
                {/*<ul className="nav navbar-nav navbar-right">
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
                                                <img src={(this.props.personalInfo !== null) ? this.props.personalInfo.avatar : ''}></img>
                                            </p>
                                        </div>
                                        <div className="col-lg-8">
                                            <p className="text-center"><strong>{(this.props.personalInfo !== null) ? this.props.personalInfo.name : ''}</strong></p>
                                            <p className="text-center small">{(this.props.personalInfo !== null) ? this.props.personalInfo.email : ''}</p>
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
                </ul>*/}
            </div>
        </div>
    </div>
    );
  }
};
function mapStateToProps(state){
  return {
    personalInfo: state.auth.userInfo
  };
}

//Connect the reducer to the container
export default connect (mapStateToProps, actions) (Nav_Bar);
