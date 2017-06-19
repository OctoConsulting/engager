import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Avatar from '../Per_Profile/components/Avatar';
import Bio from '../Per_Profile/components/Bio';
import Nav_Bar from '../../Nav_Bar';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Dash from './components/Dash';


const dummy_data = {
      "Name": "Josh Doe",
      "Title": "Developer",
      "Integrations": ["Twitter", "Facebook", "LinkedIn"]
}


const Pub_Profile = () => {
  return(
    <div>
      <div className="navbar-custom">
        <Nav_Bar/>
      </div>
      <div className="panel panel-info">
        <div className="panel-heading">THEIR PROFILE</div>
        <div className="panel-body">
          <div className="list-group-item">
            <Avatar name={[dummy_data.Name, dummy_data.Title]}/>
            <Bio text={dummy_data.Title}/>
            <br/>
          </div>
        </div>
      </div>
      <Dash></Dash>
    </div>
  );

}

export default Pub_Profile;
