
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Nav_Bar from '../../Nav_Bar';
import _ from 'lodash';
let data;
class Dashboard extends Component{
  constructor(props){
    super(props);
    this.state = {
      init: this.props.users,
      selectedOption: 'option3'
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      init: nextProps.users
    });
  }

  imageFormatter(cell, row){
    return "<img class='dashboard-table-avatar' src='"+cell+"'/>" ;
  }

  handleSelection(event){
    this.setState({
      selectedOption: event.target.value
    });
    if (event.target.value === 'option1'){
      this.props.retrieveWeeklyDashboard();
    }
    else if (event.target.value === 'option2'){
      this.props.retrieveMonthlyDashboard();
    }
    else{
      this.props.retrieveAlltimeDashboard();
    }
  }
  render(){
    return(
      <div>
        <div className="navbar">
          <Nav_Bar/>
        </div>
        <div className="container personal-profile-container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                  <div className="panel rounded shadow">


                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <div id="sel" className="btn-group" data-toggle="radio">
                        <label className="btn btn-default">
                          <input type="radio" value="option1" autoComplete="on"
                            data-toggle="sel"
                            checked={this.state.selectedOption==='option1'}
                            onChange={this.handleSelection.bind(this)}/> Weekly
                          </label>
                          <label className="btn btn-default">
                            <input type="radio" value="option2" autoComplete="on"
                              data-toggle="sel"
                              checked={this.state.selectedOption==='option2'}
                              onChange={this.handleSelection.bind(this)}/> Monthly
                            </label>
                            <label className="btn btn-default">
                              <input type="radio" value="option3" autoComplete="on"
                                data-toggle="sel" checked={this.state.selectedOption==='option3'}
                                onChange={this.handleSelection.bind(this)}/> All time
                              </label>
                            </div>
                      </div>


                    {/*<button type="button" className="btn btn-primary"
                      onClick={this.handleWeekly.bind(this)}>WEEKLY</button>*/}
                    <BootstrapTable data={ this.state.init }  search={ true } pagination striped hover bordered>
                        <TableHeaderColumn dataField='avatar' isKey={ true } dataFormat={this.imageFormatter}>Avatar</TableHeaderColumn>
                        <TableHeaderColumn dataField='name' dataSort={ true }>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField='lai' dataFormat={this.imageFormatter}>Last Action Icon</TableHeaderColumn>
                        <TableHeaderColumn dataField='actions' dataSort={ true }># of Actions</TableHeaderColumn>
                        <TableHeaderColumn dataField='points' dataSort={true}>Points</TableHeaderColumn>
                    </BootstrapTable>
                  </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    users: state.auth.dash
  };
}

export default connect(mapStateToProps,actions)(Dashboard);
