import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from "react-redux";

import NavBar from '../../Nav_Bar';
import Table from './components/Table';

// var products = [{
//       id: 1,
//       name: "Product1",
//       price: 120,
//       actions: "200Actions",
//       points: "2000pts"
//   }, {
//       id: 2,
//       name: "Product2",
//       price: 80,
//       actions: "200Actions",
//       points: "2000pts"
//   }];

class Dashboard extends Component{
  render(){
    const products = this.props.users;
    return (
      <div><Table users={products}/></div>
    );
  }
}

Dashboard.propTypes = {
  dispatch: React.PropTypes.func
};

Dashboard.defaultProps = {
  dispatch: () => {}
};

function mapStateToProps(state){
  return {
    users: state.data.users
  };
}

export default connect(mapStateToProps)(Dashboard);
