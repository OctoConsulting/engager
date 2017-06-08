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
    	<div>
			<div className="input-group">
  			<input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon2"/>
  			<span className="input-group-addon" id="basic-addon2">@octoconsulting.com</span>
			</div>

			<div className="input-group">
  			<input type="text" className="form-control" placeholder="Password" aria-describedby="basic-addon2"/>
  			<span className="input-group-addon" id="basic-addon2">'Between 8 - 12 char'</span>
			</div>
		</div>
    );
  }
}

export default Input;
