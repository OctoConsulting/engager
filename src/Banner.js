//BANNER IS ITS OWN THING BECAUSE WE NEED TO RENDER IT SEPARATELY
//FROM OTHERS SINCE IT NEEDS TO BE PERSISTENT

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Title from './components/login_page/components/Title';

class Banner extends Component{
  render(){
    return(
      <div>
        <div className="Name" id="top-name">
          <Title string={'OCTO CONSULTING'}/>
        </div>
        <div className="banner">
        </div>
        {/*This is to make sure the sub routes are rendered*/}
        {this.props.children}
      </div>
    );
  }
};

export default Banner;
