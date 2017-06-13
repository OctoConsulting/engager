import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Avatar from './components/Avatar';
import Bio from './components/Bio';
import Social_Media from './components/Social_Media';
import Title from '../Log_In/components/Title';


const dummy_data = {
      "Name": "John Doe",
      "Title": "Developer",
      "Integrations": ["Twitter", "Facebook", "LinkedIn"]
}



const Per_Profile = () => {
  return(
    <div className="panel panel-info">
      <div className="panel-heading">YOUR PROFILE</div>
      <div className="panel-body">
        <div className="list-group-item">
          <Avatar name={[dummy_data.Name, dummy_data.Title]}/>
          <Bio text={dummy_data.Title}/>
          <br/>
          <Title string={"Active Integrations"}/>
          <Social_Media list={dummy_data.Integrations}/>
        </div>
      </div>
    </div>
  );

}

export default Per_Profile;
