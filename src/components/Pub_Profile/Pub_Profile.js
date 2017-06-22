import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';


import Nav_Bar from '../../Nav_Bar';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import Public_Profile_Table from './components/Public_Profile_Table';
import Public_Profile_Content from './components/Public_Profile_Content';


class Pub_Profile extends Component {
//Have to use map method to extract data from state
  renderItems(){
    return this.props.publicInfo.map((impInfo) => {
      return (
        <Public_Profile_Content pInfo={impInfo}/>
      );
    });
  }

  render(){
    return (
      <div>
        <div className="navbar-custom">
          <Nav_Bar/>
        </div>
        {this.renderItems()} {/*This returns the above render method*/}
        <Public_Profile_Table social_media_accounts={null}/>
      </div>
    );
  }

}
//Connecting container to reducer
function mapStateToProps(state){
  return {
    publicInfo: state.publicProfileInfo
  };
}

export default connect (mapStateToProps) (Pub_Profile);
