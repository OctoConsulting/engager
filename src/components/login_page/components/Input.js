import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components

class Input extends Component {
  constructor(props){
    super(props);
    this.state = {string: ''};
  }
  render(){
    return (
      <input value={this.state.string}/>
    );
  }
}

export default Input;
