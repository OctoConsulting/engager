import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
//Custom components
import Banner from '../../Banner';

class Sign_Up_Box extends Component {
  handleFormSubmit({name, email, password}){
    this.props.signupUser({name, email, password});
  }

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
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <input type="text" className="form-control"
            placeholder="Name"
           {...name}/>
           {name.touched && name.error && <div className="text-error">{name.error}</div>}
         </fieldset>
        <fieldset className="form-group">
        <input type="text" className="form-control"
          placeholder="Email"
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
          <button type="submit" className="btn btn-warning">REGISTER </button>
          </div>
      </form>
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
    errors.email = "Please enter a valid email";
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
},mapStateToProps, actions)(Sign_Up_Box);
