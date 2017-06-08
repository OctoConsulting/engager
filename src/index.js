//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom created components
import LogIn from './components/login_page/login';

//New Component
class App extends Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
				<LogIn />
			</div>
		);
	}
};

//Showing HTML in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
