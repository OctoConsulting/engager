import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Avatar from './components/Avatar';
import Bio from './components/Bio';
import Social_Media from './components/Social_Media';
import Title from '../Log_In/components/Title';
import Nav_Bar from '../../Nav_Bar';

//Pulling data from a reducer to display for personal profile
class  Per_Profile extends Component {
  renderItems(){
    return this.props.personalInfo.map((object) => {
      return(
        <div>
          <div className="navbar-custom">
            <Nav_Bar/>
          </div>
          <div className="panel panel-info">
            <div className="panel-heading">YOUR PROFILE</div>
            <div className="panel-body">
              <div className="list-group-item">
                <Avatar name={[object.Name, object.Title]}/>
                <Bio text={object.Title}/>
                <br/>
                <Title string={"Active Integrations"}/>
                <Social_Media list={object.Integrations}/>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
//using 2 different methods because the default render() doesn't
//like returning an object other than a div container
  render(){
    return(
      <div>
        {this.renderItems()}
      </div>
    );

  }

}
//Mapping the state to props for using inside the class
function mapStateToProps(state){
  return {
    personalInfo: state.personalProfileInfo
  };
}

//Connect the reducer to the container
export default connect (mapStateToProps) (Per_Profile);
