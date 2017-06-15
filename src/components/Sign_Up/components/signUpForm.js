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
      <div className="list-group-item">
            <form action="/auth/signUp" method="POST">
                <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" name="userName" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password1" name="password1" placeholder="Confirm Password"/>
                </div>
                <div className="button_pos">
                <button type="button" className="btn btn-warning">REGISTER </button>
                </div>
            </form>
        </div>

    );
  }
}

export default signUpForm;
