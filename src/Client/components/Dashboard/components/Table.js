import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Table extends Component{
  render(){
    return(
      <div>
      <div  className="container dashboard-container">
            <div className="row" style={{margin: "10px"}}>
              <div className="col-md-12">

                <BootstrapTable data={this.props.users}  search={ true } pagination striped
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
}
