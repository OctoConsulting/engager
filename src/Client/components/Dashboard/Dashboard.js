import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from "react-redux";

import Nav_Bar from '../../Nav_Bar';
import Table from './components/Table';


class Dashboard extends Component{
  render(){
    const products = this.props.users;
    return (
      <div>
        <div className="navbar-custom">
          <Nav_Bar/>
        </div>
        <Table users={products}/>
      </div>
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
  console.log(state);
  return {
    users: state.dashboard
  };
}

export default connect(mapStateToProps)(Dashboard);
