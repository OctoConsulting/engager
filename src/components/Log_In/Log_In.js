import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Banner from '../../Banner';
import Sign_In_Box_Content from './components/Sign_In_Box_Content';


const Log_In = () => {
    return (
      <div>
        <Banner/>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">WELCOME</h3>
          </div>
          <div className="panel-body">
            <Sign_In_Box_Content/>
          </div>
        </div>
      </div>
    );
};

export default Log_In;
