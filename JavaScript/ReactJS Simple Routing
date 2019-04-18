import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products from './Api/Api';
import About from './Api/About';
import Register from './Api/Register';
import Login from './Api/Login';
import Logout from './Api/Logout';
import Dashboard from './Api/Dashboard';
import './App.css';

class App extends Component {

  render() {
    return (
		<Router>
			<div style={aboutPage}>
				<Route exact path="/" component={Products}/>
				<Route path="/About" component={About} />		
				<Route path="/Register" component={Register} />	
				<Route path="/Login" component={Login} />
				<Route path="/Logout" component={Logout} />	
				<Route path="/Dashboard" component={Dashboard} />
			</div>
		</Router>
	
		);
	}	
}

const aboutPage = {
	margin: 'auto',
	textAlign: 'center',
	padding: '20px'
}


export default App;
