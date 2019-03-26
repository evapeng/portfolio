import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from '../screens/Main.js';
import Calendar from '../screens/Calendar_Live.js';

export default class Routes extends Component {
	render(){
		return (
			<BrowserRouter>
				<React.Fragment>
					<Route exact path='/' render={() => <Main/>}/>
					<Route exact path='/calendar' render={() => <Calendar/>}/>
				</React.Fragment>
			</BrowserRouter>
		)
	}
}