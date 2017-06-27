import React, {Component} from 'react';
import ReactDOM from 'react-dom';
var products = [{
      avatar: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
      name: "Jhon Doe",
      lai: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
      actions: "200Actions",
      points: "200Pts"
  }, {
      avatar: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
      name: "Andrew Josh",
      lai: "https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg",
      actions: "1Actions",
      points: "2Pts"
  }];
export default class Table extends Component{
  imageFormatter(cell, row){
    return "<img class='dashboard-table-avatar' src='"+cell+"'/>" ;
  }
  render(){
    return(
      <div  className="container personal-profile-container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="panel rounded shadow">
                  <BootstrapTable data={ products }  search={ true } pagination striped hover bordered>
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
    );
  }
}
