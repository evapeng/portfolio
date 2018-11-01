import React, { Component } from 'react';
import request from 'request';
import calendar from '../res/img/calendar.png';
import styles from '../index.module.scss';
import globals from '../globals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

export default class Calendar extends Component {
	componentDidMount(){
	}
	render(){
		return (
			<div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#00ba6c'}}>
				<div className={globals.spacer}/>
				<div>
					<MediaQuery maxDeviceWidth={768}>
						<img src={calendar} style={{width: '90%'}}/>
					</MediaQuery>
					<MediaQuery minDeviceWidth={768}>
						<img src={calendar} style={{width: '50%'}}/>
					</MediaQuery>
				</div>
				<div className={globals.spacer}/>
				<div className={globals.container} style={{display: 'flex', flexDirection: 'column'}}>
					<h1 style={{fontSize: '24px', color: 'white', fontWeight: 400, paddingBottom: '36px', letterSpacing: '2px'}}> 2018 Calendar </h1>
					<p style={{fontSize: '24px', color: 'white', lineHeight: '28px', paddingBottom: '24px'}}> Seeing your year in a glance gives you perspective and helps you plan for long term goals. A super minimalist calendar that is meant to be on you 24/7. </p>
					<p style={{fontSize: '16px', color: 'white'}}> React / Progressive Web App / Redux </p>
				</div>
				<div className={globals.spacer}/>
				<FontAwesomeIcon icon={faCircle} style={{color: 'white'}}/>
				<div className={globals.spacer}/>
			</div>
		)
	}
}