import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Title from './components/Title';
import Sign_In_Box_Content from './components/Sign_In_Box_Content';
import SignUp from '../Sign_Up/Sign_Up';

const Log_In = () => {
    return (
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">WELCOME</h3>
          </div>
          <div className="panel-body">
            <Sign_In_Box_Content/>
          </div>
        </div>
    );
};

export default Log_In;
