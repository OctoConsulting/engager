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

            <form action="/auth/signUp" method="POST">
                <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                </div>
                <div class="form-group">
                    <input type="text" className="form-control" id="username" name="userName" placeholder="Email"/>
                </div>
                <div class="form-group">
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password"/>
                </div>
                <div class="form-group">
                    <input type="password" className="form-control" id="password1" name="password1" placeholder="Confirm Password"/>
                </div>
                <button type="submit" className="btn  btn-block button-login">Go</button>

            </form>
        </div>
   
    );
  }
}

export default signUpForm;
