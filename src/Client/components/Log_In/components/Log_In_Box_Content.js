import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {reduxForm} from 'redux-form';
import {userSubmit} from '../../../actions/index';
//Custom components
//Tis is one giant block that contains the 2 input fields
//for Username and Password on LOG IN
class Log_In_Box_Content extends Component {
  constructor(props){
    super(props);
    //take the existing this and override it
    //when the input changes
  }
  //new context type object specifically for router context
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(props){
    this.props.userSubmit(props);
  }

  render(){
    //Assigning the properties from this.props to fields
    const { fields: {username, password}, handleSubmit} = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        {/*making sure it'd turn red when the user doesn't input all data*/}
        <div className={`form-group ${username.touched && username.invalid ? 'has-danger' : ''}`}>
          <label>Username</label>
          <input type="text" className="form-control" {...username}/>
          <div className="text-help">
            {username.touched ? username.error : ''}
          </div>
        </div>

        <div className={`form-group ${password.touched && password.invalid ? 'has-danger' : ''}`}>
          <label>Password</label>
          <input type="password" className="form-control" {...password}/>
          <div className="text-help">
            {password.touched ? password.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-warning"> LOG IN</button>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if (!values.username){
    errors.username = 'This field is required';
  }
  if (!values.password){
    errors.password = 'This field is required';
  }
  return errors;
}

//reduxForm argument list: form config, mapStateToProps, mapDispatchToProps
export default reduxForm({
  form: 'PostLogIn',
  fields: [
    'username',
    'password'
  ],
  validate
}, null, { userSubmit } )(Log_In_Box_Content);
