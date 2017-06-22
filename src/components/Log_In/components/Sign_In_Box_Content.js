
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
//Custom components
//Tis is one giant block that contains the 2 input fields
//for Username and Password on LOG IN
class Sign_In_Box_Content extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: '',
      password: '',
      errors: {},
      isLoading: false
};
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);  
    // this.onPasswordChange = this.onPasswordChange.bind(this)
  }

  onSubmit(e) {
    e.preventDefault();
    // axios.post('http://localhost:3000/login',  {username: this.state.username, password: this.state.password}).then(res => this.context.router.push('/Dashboard'));
    //  this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/Dashboard'),
      //   (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
  }

  // onEmailChange(e) {
  //   this.setState({email: e.target.value})
  // }
  onChange(e) {
    this.setState({[e.target.name]: e.target.value});

    this.state = {string: ''};

  }
  render(){
    return (
      <div className="list-group-item">
        <div>
           <div className="form-group">
             <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon2"/>
             <span className="input-group-addon" id="basic-addon2">@octoconsulting.com</span>
           </div>

           <div className="form-group">
             <input type="text" className="form-control" placeholder="Password" aria-describedby="basic-addon2"/>
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
    );
  }
}

export default Sign_In_Box_Content;
