import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Per_Profile/components/Avatar.jsx';
import Bio from './Per_Profile/components/Bio.jsx';
import Social_Media from './Per_Profile/components/Social_Media.jsx';
import NavBar from './nav.jsx'
import Sign_In_Box_Content from './Sign_in/Sign_In_Box_Content.jsx';

const dummy_data = {
      "Name": "John Doe",
      "Title": "Developer",
      "Integrations": ["Twitter", "Facebook", "LinkedIn"]
}

var Sign_In = React.createClass({
  render() {
    return(
      <div>
        <div className="box-form">
          <div className="panel panel-warning">
            <div className="panel-heading">
              <h3 className="panel-title">WELCOME</h3>
            </div>
            <div className="panel-body">
              <Sign_In_Box_Content/>
            </div>
          </div>
        </div>
    </div>
    );
  }
});

module.exports = Sign_In;
