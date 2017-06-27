import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Info is piped in via a reducer
export default class Public_Profile_Content extends Component {
  render(){
    return(
      <div  className="container personal-profile-container">
        <div className="row">
          <div className="col-md-12 profile-card">
            <div className="profile-cover">
             <div className="profile-avatar">
                <img src="https://dl.dropboxusercontent.com/s/7pcnqq18skh1myk/avatar.jpg" alt="Anis M" />
             </div>
             <div className="profile-details">
                 <h1>{this.props.pInfo.Name}</h1>
                 <h6>{this.props.pInfo.Title}</h6>
             </div>
           </div>
         </div>
       </div>
     </div>
    );
  }
}
