//BANNER IS ITS OWN THING BECAUSE WE NEED TO RENDER IT SEPARATELY
//FROM OTHERS SINCE IT NEEDS TO BE PERSISTENT

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Title from './components/Log_In/components/Title';

class Banner extends Component{
  render(){
    return(
      <div>
        <div className="banner">
          <img src="../img/Banner.jpg"/>
        </div>
        <div className="box-form">
          {/*This is to make sure the sub routes are rendered*/}
          {this.props.children}
        </div>
      </div>
    );
  }
};

export default Banner;
