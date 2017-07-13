import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import * as actions from '../../actions';

//Custom components
//Tis is one giant block that contains the 2 input fields
//for email and Password on LOG IN
class Log_In extends Component {

  handleFormSubmit({ email, password }){
    //Needs to send email and password to server
    this.props.signinUser({email, password});
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
    //Assigning the properties from this.props to fields
    //handleSubmit is a redux form library function
    const { fields: {email, password}, handleSubmit} = this.props;
    return (
    <div>
      <div className="app-name">
        <h1>ENGAGER</h1>
      </div>
      <form className="box-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        {/*making sure it'd turn red when the user doesn't input all data*/}
        <div className={`form-group ${email.touched && email.invalid ? 'has-danger' : ''}`}>
          <label>Email</label>
          <input type="text" className="form-control" {...email}/>
          <div className="text-help">
            {email.touched ? email.error : ''/*Only displays the error message when the box is touched*/}
          </div>
        </div>
        {/*Supposed to check if it's been touched and if invalid is true
          if so make it red*/}
        <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
          <label>Password</label>
          <input type="password" className="form-control" {...password}/>
          <div className="text-help">
            {password.touched ? password.error : ''}
          </div>
        </div>
        {this.renderAlert()}
        <div className="button_pos">
          <button type="submit" className="btn btn-primary"> LOG IN</button>
        </div>
        <div className="button_pos">
          <Link to='/SignUp' className="btn btn-primary"> SIGN UP</Link>
        </div>
      </form>
    </div>
    );
  }
}



//THIS FUNCTION CHECKS IF THERE'S INPUT IN THE FIELDS
function validate(values){
  const errors = {};

  if (!values.email){
    errors.email = 'This field is required';
  }
  if (!values.password){
    errors.password = 'This field is required';
  }
  return errors;
}

function mapStateToProps(state){
  return {
    errorMessage: state.auth.error
  };
}


//reduxForm argument list: form config, mapStateToProps, mapDispatchToProps
export default reduxForm({
  form: 'signin',
  fields: [
    'email',
    'password'
  ],
  validate
}, mapStateToProps, actions )(Log_In);
