import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from "react-redux";

import NavBar from '../../../Nav_Bar';


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

var Dashboard = React.createClass({
  getIntialState: function() {
    name: {

    }
  },

  render: function() {
    var products = this.props.users;
    return (
      <div>
        <NavBar></NavBar>
        <div  className="container dashboard-container">
          <div className="row" style={{margin: "10px"}}>
            <div className="col-md-12">

              <BootstrapTable data={ products }  search={ true } pagination striped
      hover
      bordered>
                  <TableHeaderColumn dataField='id' isKey={ true } dataSort={ true }>Product ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='name' dataSort={ true }>Product Name</TableHeaderColumn>
                  <TableHeaderColumn dataField='price' dataSort={ true }>Product Price</TableHeaderColumn>
                  <TableHeaderColumn dataField='actions' dataSort={ true }>LAI</TableHeaderColumn>
                  <TableHeaderColumn dataField='points' dataSort={ true }>Points</TableHeaderColumn>
              </BootstrapTable>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

Dashboard.propTypes = {
  dispatch: React.PropTypes.func
};

Dashboard.defaultProps = {
  dispatch: () => {}
};

export default connect((state) => ({
  users: state.data.users
}))(Dashboard);
