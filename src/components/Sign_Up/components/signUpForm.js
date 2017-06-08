import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components

class signUpForm extends Component {
  constructor(props){
    super(props);
    this.state = {string: ''};
  }
  render(){
    return (
    	<div>
        <div class="input-group">
          <span class="input-group-addon" id="sizing-addon2">Username</span>
          <input type="text" class="form-control" aria-describedby="sizing-addon2"/>
          </div>
		  </div>
    );
  }
}

export default signUpForm;
