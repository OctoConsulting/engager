import React, {Component} from 'react';
import ReactDOM from 'react-dom';


const Avatar = ({name}) =>{
  return(
    <div className="col-lg-6 col-sm-6">
      <div className="card hovercard">
        <div className="card-background">
          <img className="card-bkimg" alt="" src="../../../img/Profile_pic.jpg"/>
          {/*<!-- http://lorempixel.com/850/280/people/9/ -->*/}
        </div>
      <div className="useravatar">
          <img alt="" src="../../../img/Profile_pic.jpg"/>
      </div>
      <div className="card-info">
        <span className="card-title">{name[0]}</span>
        <span className="card-title">{name[1]}</span>
      </div>
    </div>
    </div>
  );
}

export default Avatar;
