import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions';
import {browserHistory} from 'react-router';

class Sign_Out extends Component {
  componentWillMount(){
    this.props.signoutUser();
  }
  render(){
    return (
      <div>Signing you out now...
        {browserHistory.push("/signin")}
      </div>
    );
  }
}

export default connect(null, actions)(Sign_Out);
