import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Title from './components/Title';
import Input from './components/Input';

const LogIn = () => {
    return (
      <div>
        <div className="Name">
          <Title string={'OCTO CONSULTING'}/>
        </div>
        <div className="banner">
        </div>
        <div className="box">
          <div className="title">
            <Title string={'LOGIN'} />
          </div>
          <div className="input_box">
          <ul className="list-group-item">
            <Input />
            <br/>
            <Input />
          </ul>
          </div>
          <div className="button_pos">
          <button type="button" className="btn btn-primary">LOG IN </button>
          </div>
        </div>
      </div>
    );
};

export default LogIn;
