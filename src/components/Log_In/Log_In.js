import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

//Custom components
import Banner from '../../Banner';


class Log_In extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
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
    return (
      <div>
        <Banner/>
        <div className="panel panel-warning">
          <div className="panel-heading">
            <h3 className="panel-title">WELCOME</h3>
          </div>
          <div className="panel-body">
            <form action="/auth/signUp" method="POST">
              <div className="list-group-item">
              <div>
                 <div className="form-group">
                   <input type="text" className="form-control" placeholder="Email" id="email" name="email"  onChange={this.handleEmailChange.bind(this)} aria-describedby="basic-addon2"/>
                   <span className="input-group-addon" id="basic-addon2">@octoconsulting.com</span>
                 </div>

                 <div className="form-group">
                   <input type="password" className="form-control" placeholder="Password" id="password" name="password" onChange={this.handlePasswordChange.bind(this)} aria-describedby="basic-addon2"/>
                   <span className="input-group-addon" id="basic-addon2">'Between 8 - 12 char'</span>
                 </div>
              </div>
              <div className="button_pos">
                <div className="btn-toolbar" role="toolbar" aria-label="...">
                  <div className="btn-group" role="group" aria-label="...">
                    <Link to="/Per_Profile" className="btn btn-warning">LOG IN </Link>
                  </div>
                  {/*necessary routing for the button to call up another component*/}
                  <div className="btn-group" role="group" aria-label="...">
                    <Link to="/SignUp" className="btn btn-warning">SIGN UP </Link>
                  </div>
                </div>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
};

export default Log_In;
