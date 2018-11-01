import React, { Component } from 'react';
import logo from './logo.svg';
import person from "./res/img/person1.png"
import { Link } from 'react-router-dom';
import Router from './config/routes.js';

class App extends Component {
	render() {
		return (
		 <Router/>
		);
	}
}

export default App;
