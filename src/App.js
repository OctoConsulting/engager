import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';

import Log_In from './components/Log_In/Log_In';


class App extends Component {
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
