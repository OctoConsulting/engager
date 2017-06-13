import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Nav_Bar from '../../../Nav_Bar';

var Dashboard = React.createClass({
  getIntialState: function() {
    name: {

    }
  },
  componentDidMount: function(){
    $(document).ready(function() {
      $('#example').DataTable({
        dom : 'l<".dashboard-label">frtip'
      });
      $('<label class="label label-info"/>').text('Daily').appendTo('.dashboard-label')
      $('<label class="label label-primary"/>').text('Monthly').appendTo('.dashboard-label')
      $('<label class="label label-success"/>').text('All-Time').appendTo('.dashboard-label')
    } );
 	},
  render: function() {
    return (
      <div  className="container dashboard-container">
        <Nav_Bar/>
        {// <div className="row">
        //   <div className="col-md-2">
        //     <select className="form-control dashboard-filter">
        // 				<option value="">Export Basic</option>
        // 				<option value="all">Export All</option>
        // 				<option value="selected">Export Selected</option>
        // 		</select>
        //   </div>
        //   <div className="col-md-8 dashboard-label">
        //     <span className="label label-info">Daily</span>
        //     <span className="label label-primary">Monthly</span>
        //     <span className="label label-success">All-Time</span>
        //   </div>
        // </div>

        // <div className="row">
        //    <div className="col-md-12">
        //     <img alt="image" className="dashboard-profile-picture" src="../../../img/1065-IMG_2529.jpg" />
        //    </div>
        // </div>
      }
        <div className="row" style={{margin: "10px"}}>
          <div className="col-md-12">
            <table id="example" className="table table-striped table-bordered dashboard-table" cellspacing="0">
            <thead>
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>LAI</th>
                <th>Actions</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img alt="image" className="dashboard-table-avatar" src="../../../img/1065-IMG_2529.jpg" />
                </td>
                <td className="dashboard-fix-td-margin">Karam</td>
                <td><img alt="image" className="dashboard-table-avatar" src="../../../img/1065-IMG_2529.jpg" /></td>
                <td className="dashboard-fix-td-margin">5 Actions</td>
                <td className="dashboard-fix-td-margin">200pts</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    );
  }
});

export default Dashboard;
