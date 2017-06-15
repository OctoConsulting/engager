import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import { login } from '../../actions/authActions';

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

  }

  onSubmit(e) {
    e.preventDefault();
     this.setState({ errors: {}, isLoading: true });
      this.props.login(this.state).then(
        (res) => this.context.router.push('/'),
        (err) => this.setState({ errors: err.response.data.errors, isLoading: false })
      );
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render(){
    const {errors, identifier, password, isLoading} = this.state;
    return (
      <div className="list-group-item">
        <form onSubmit={this.onSubmit}>
           <div className="form-group">
             <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon2"
             value={identifier} error={errors.identifier} onChange={this.onChange} field="identifier" label="Username / Email"
             />
             <span className="input-group-addon" id="basic-addon2">@octoconsulting.com</span>
           </div>

           <div className="form-group">
             <input type="text" className="form-control" placeholder="Password" aria-describedby="basic-addon2"
             value={password} error={errors.password} onChange={this.onChange} type="text" field="password" label="password"
             />
             <span className="input-group-addon" id="basic-addon2">'Between 8 - 12 char'</span>
           </div>
        
        <div className="button_pos">
          <div className="btn-toolbar" role="toolbar" aria-label="...">
            <div className="btn-group" role="group" aria-label="...">
              <button className="btn btn-warning" disabled={isLoading} >LOG IN </button>
            </div>
            {/*necessary routing for the button to call up another component*/}
            <div className="btn-group" role="group" aria-label="...">
              <Link to="/SignUp" className="btn btn-warning">SIGN UP </Link>
            </div>
          </div>
        </div>
        </form>
      </div>
    );
  }
}

Sign_In_Box_Content.propTypes = {
  login: React.PropTypes.func.isRequired
}

Sign_In_Box_Content.contextTypes = {
  router: React.PropTypes.object.isRequired
}
  export default connect(null, { login })(Sign_In_Box_Content);
//  export default Sign_In_Box_Content;
