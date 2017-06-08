//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';



//New Component
class App extends Component {
	constructor(props){
		super(props);


	}
	render(){
		return (<div>
			Hi There
			</div>
		);
	}
};

//Showing HTML in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
