import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Avatar from './Per_Profile/components/Avatar.jsx';
import Bio from './Per_Profile/components/Bio.jsx';
import Social_Media from './Per_Profile/components/Social_Media.jsx';
import NavBar from './nav.jsx'


const dummy_data = {
      "Name": "John Doe",
      "Title": "Developer",
      "Integrations": ["Twitter", "Facebook", "LinkedIn"]
}

var PerProfile = React.createClass({
  render: function() {
    return(
      <div>
        <NavBar></NavBar>
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-info">
              <div className="panel-heading">YOUR PROFILE</div>
              <div className="panel-body">
                <div className="list-group-item">
                  <Avatar name={[dummy_data.Name, dummy_data.Title]}/>
                  <Bio text={dummy_data.Title}/>
                  <br/>
                  <Social_Media list={dummy_data.Integrations}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
    );
  }

  });
module.exports = PerProfile;
