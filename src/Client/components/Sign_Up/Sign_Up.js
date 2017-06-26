import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
//Custom components
import Banner from '../../Banner';
import Sign_Up_Box from './Sign_Up_Box';

export default class Sign_Up extends Component {
  render(){
    return(
    <div>
      <Banner/>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">SIGN UP</h3>
        </div>
        <div className="panel-body">
          <Sign_Up_Box/>
        </div>
      </div>
    </div>
    );
  }
}
