import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Title from './components/login_page/components/Title';

const Banner = () => {
  return(
    <div>
      <div className="Name">
        <Title string={'OCTO CONSULTING'}/>
      </div>
      <div className="banner">
      </div>
    </div>
  );
};

export default Banner;
