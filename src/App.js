//library function
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

//Custom created components
import LogIn from './components/login_page/login';
//New Component

//App.js renders Login. I might have to refactor it later
class App extends Component {
	constructor(props){
		super(props);
		this.state = {onDisplay: null};
	}
		render() {
			return (
				<div>
					<LogIn />
				</div>
			);
	}
};

export default App;
