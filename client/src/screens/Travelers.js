import React, { Component } from 'react';
import travelers_1 from '../res/img/travelers_1.jpg';
import travelers_2 from '../res/img/travelers_2.jpg';
import styles from '../index.module.scss';
import globals from '../globals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

export default class Travelers extends Component {
	render(){
		return (
			<div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#c20000'}}>
				<div className={globals.spacer}/>
				<div style={{fontSize: 0}}>
					<MediaQuery maxDeviceWidth={768}>
						<img src={travelers_1} style={{width: '100%'}}/>
						<img src={travelers_2} style={{width: '100%'}}/>
					</MediaQuery>
					<MediaQuery minDeviceWidth={768}>
						<img src={travelers_1} style={{width: '50%'}}/>
						<img src={travelers_2} style={{width: '50%'}}/>
					</MediaQuery>
				</div>
				<div className={globals.spacer}/>
				<div className={globals.container} style={{display: 'flex', flexDirection: 'column'}}>
					<h1 style={{fontSize: '24px', color: 'white', fontWeight: 400, paddingBottom: '36px', letterSpacing: '2px'}}> Travelers Insurance DLS </h1>
					<p style={{fontSize: '24px', color: 'white', lineHeight: '28px', paddingBottom: '24px'}}> Help Travelers Insurance build a design language system that improves upon the current user experience and visual language. </p>
					<p style={{fontSize: '16px', color: 'white'}}> Vanilla JS / HTML / CSS </p>
				</div>
				<div className={globals.spacer}/>
				<FontAwesomeIcon icon={faCircle} style={{color: 'white'}}/>
				<div className={globals.spacer}/>
			</div>
		)
	}
}