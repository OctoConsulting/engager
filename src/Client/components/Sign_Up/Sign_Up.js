import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import  {Link} from 'react-router';
import * as actions from '../../actions';
//Custom components

class Sign_Up extends Component {

  //CLEARING ERROR FROM PREV. COMPONENT
  componentWillMount(){
    this.props.clearError();
  }
  //SENDING INFO TO THE SERVER
  handleFormSubmit({name, email, password}){
    this.props.signupUser({name, email, password});
  }

  //SHOWS ERROR IF THERE'S ANY
  renderAlert(){
    if(this.props.errorMessage){
      return(
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render(){
    const {handleSubmit, fields: {name, email, password, confirmedPassword}} = this.props;
    return(
      <div>
        <div className="app-name">
          <a><img src="../../../../img/Engager_ico_512x512.png"/></a>
        </div>
        <form className="box-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <h4>CREATE AN ACCOUNT</h4>
          <br/>
          <fieldset className="form-group">
            <input type="text" className="form-control"
              placeholder="Name"
              pattern="[A-za-z' ]+"
              title="Please enter your full name. No special characters or numbers allowed (except for ')"
             {...name}/>
             {name.touched && name.error && <div className="text-error">{name.error}</div>}
           </fieldset>
          <fieldset className="form-group">
          <input type="text" className="form-control"
            placeholder="Email e.g. example@octoconsulting.com"
            pattern="[A-Za-z0-9\.]+@octoconsulting\.com"
            title="Only A Valid Octo Email Is Allowed"
            {...email}/>
            {email.touched && email.error && <div className="text-error">{email.error}</div>}
          </fieldset>
          <fieldset className="form-group">
            <input type="password" className="form-control" placeholder="Password"
              {...password}/>
              {password.touched && password.error && <div className="text-error">{password.error}</div>}
            </fieldset>
        <fieldset className="form-group">
            <input type="password" className="form-control" placeholder="Confirm Password"
            {...confirmedPassword}/>
            <div className="text-error">
              {confirmedPassword.touched ? confirmedPassword.error : ''}
            </div>
            </fieldset>
            {this.renderAlert()}
            <div className="button_pos">
              <button type="submit" className="btn btn-primary">REGISTER </button>
            </div>
            <div className="button_pos">
              <Link to='/SignIn' className="btn btn-primary">CANCEL</Link>
            </div>
        </form>
      </div>
    );
  }
}

function validate(values){
  const errors ={};
  if (values.password != values.confirmedPassword){
    errors.confirmedPassword = "Passwords must match";
  }

  if (!values.name){
    errors.name = "Please enter a name";
  }
  if (!values.email){
    errors.email = "Please enter a valid Octo email";
  }
  if (!values.password){
    errors.password = "Please enter a password";
  }
  if (!values.confirmedPassword){
    errors.confirmedPassword = "Please enter your password a second time";
  }

  return errors;
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  }
}

export default reduxForm({
  form: 'signup',
  fields: [
    'name',
    'email',
    'password',
    'confirmedPassword'
  ],
  validate
},mapStateToProps, actions)(Sign_Up);
