import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components
import Banner from '../../Banner';

class Sign_Up extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', email: '', password: ''};
  }
  handleNameChange(event) {
      var newState = {};
      newState.name = event.target.value;
      this.setState({name: event.target.value});
  }
  handleEmailChange(event) {
      var newState = {};
      newState.email = event.target.value;
      this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
      var newState = {};
      newState.password = event.target.value;
      this.setState({password: event.target.value});
  }
  render(){
    console.log(this.state);
    return(
    <div>
      <Banner/>
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">SIGN UP</h3>
        </div>
        <div className="panel-body">
          <div className="list-group-item">
                <form action="/auth/signUp" method="POST">
                    <div className="form-group">
                        <input type="text" className="form-control" id="name" name="name" onChange={this.handleNameChange.bind(this)}placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" id="email" name="email" onChange={this.handleEmailChange.bind(this)}placeholder="Email"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password" name="password" onChange={this.handlePasswordChange.bind(this)} placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" id="password1" name="password1" onChange={this.handlePasswordChange.bind(this)} placeholder="Confirm Password"/>
                    </div>
                    <div className="button_pos">
                    <button type="submit" className="btn btn-warning">REGISTER </button>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Sign_Up;
