import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom components

class signUpForm extends Component {
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
   }

   onSubmit(e) {
    e.preventDefault();
    axios.post('http://localhost:3000/register',  {username: this.state.username, password: this.state.password}).then(res => this.context.router.push('/Dashboard'));
    //  this.setState({ errors: {}, isLoading: true });
    //   this.props.login(this.state).then(
        // (res) => this.context.router.push('/Dashboard'),
      //   (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
    //   );
  }

 onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  render(){
    return (
      <div className="list-group-item">
            <form >
                <div className="form-group">
                    <input type="text" className="form-control" id="name" name="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <input type="text" className="form-control" id="username" onChange={this.onChange} value={username} field="username" name="username" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password" onChange={this.onChange} value={password} field="password" name="password" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" id="password1" onChange={this.onChange} name="password1" placeholder="Confirm Password"/>
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