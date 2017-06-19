import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Avatar from './components/Avatar';
import Bio from './components/Bio';
import Social_Media from './components/Social_Media';
import Title from '../Log_In/components/Title';
import Nav_Bar from '../../Nav_Bar';


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

  render(){
    return(
      <div>
        {this.renderItems()}
      </div>
    );

  }

}

function mapStateToProps(state){
  return {
    personalInfo: state.personalProfileInfo
  };
}


export default connect (mapStateToProps) (Per_Profile);
