//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom created components
import Banner from './Banner';
import LogIn from './components/login_page/login';
import SignUp from './components/Sign_Up/SignUp';
//New Component
class App extends Component {
	constructor(props){
		super(props);
		this.state = {onDisplay: null};
	}
		render() {
			return (
				<div>
					<Banner />
					<LogIn />
					<SignUp />
				</div>
			);
	}
};

//Showing HTML in the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
