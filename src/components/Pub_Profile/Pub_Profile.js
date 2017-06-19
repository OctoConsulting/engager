import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Avatar from '../Per_Profile/components/Avatar';
import Bio from '../Per_Profile/components/Bio';
import Nav_Bar from '../../Nav_Bar';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Public_Profile_Table from './components/Public_Profile_Table';



class Pub_Profile extends Component {
  renderItems(){
    return this.props.publicInfo.map((object) => {
      return(
        <div>
          <div className="navbar-custom">
            <Nav_Bar/>
          </div>
          <div className="panel panel-info">
            <div className="panel-heading">THEIR PROFILE</div>
            <div className="panel-body">
              <div className="list-group-item">
                <Avatar name={[object.Name, object.Title]}/>
                <Bio text={object.Title}/>
                <br/>
              </div>
            </div>
          </div>
          <Public_Profile_Table social_media_accounts={null}/>
        </div>
      );
    });
  }

  render(){
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }

}

function mapStateToProps(state){
  return {
    publicInfo: state.publicProfileInfo
  };
}

export default connect (mapStateToProps) (Pub_Profile);
