import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

//Custom components
import Banner from '../../Banner';
import User_Validation from '../../actions/index';
import Log_In_Box_Content from './components/Log_In_Box_Content';

export default class Log_In extends Component {
  render(){
    return (
      <div>
        <Banner/>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">WELCOME</h3>
          </div>
          <div className="panel-body">
            <Log_In_Box_Content/>
          </div>
        </div>
      </div>
    );
  }
};
