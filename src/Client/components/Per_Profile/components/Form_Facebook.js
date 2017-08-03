import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import {reduxForm} from 'redux-form';

class Form_Facebook extends Component {

  componentWillMount(){
    window.fbAsyncInit = function() {
      FB.init({
        appId      : '451996951822224',
        cookie     : false,
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "//connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  handleFormSubmit(){
    const accessToken = FB.getAuthResponse()['accessToken'];
    const userToken = localStorage.getItem('token');
    this.props.facebook_call({accessToken,userToken});
  }


  render(){
    const {fields: {username}, handleSubmit} = this.props;
    return(
        <div className="modal fade" id="facebook" role="dialog">
          <div className="modal-dialog">
            {//<!-- Modal content-->
            }
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Facebook</h4>
              </div>
              <div className="modal-body">
                <div className="fb-login-button" data-width="50" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="true" data-auto-logout-link="true" data-use-continue-as="true"
                data-scope="user_posts,publish_actions,email"
                {...username}></div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-default" data-dismiss="modal"
                  onClick = {handleSubmit(this.handleFormSubmit.bind(this))} >Submit</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default reduxForm({
  form: 'facebookForm',
  fields: [
    'username'
  ]
}, null, actions) (Form_Facebook);
