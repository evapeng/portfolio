import React, { Component } from 'react';
import pmi1 from '../res/img/pmi_1.png';
import pmi2 from '../res/img/pmi_2.png';
import styles from '../index.module.scss';
import globals from '../globals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

export default class PMI extends Component {
	render(){
		return (
			<div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#da2f00'}}>
				<div style={{fontSize: 0}}>
					<MediaQuery maxDeviceWidth={768}>
						<img src={pmi1} style={{width: '100%'}}/>
						<img src={pmi2} style={{width: '100%'}}/>
					</MediaQuery>
					<MediaQuery minDeviceWidth={768}>
						<img src={pmi1} style={{width: '33.46%'}}/>
						<img src={pmi2} style={{width: '66.54%'}}/>
					</MediaQuery>
				</div>
				<div className={globals.spacer}/>
				<div className={globals.container} style={{display: 'flex', flexDirection: 'column'}}>
					<h1 style={{fontSize: '24px', color: 'white', fontWeight: 400, paddingBottom: '36px', letterSpacing: '2px'}}> PMI </h1>
					<p style={{fontSize: '24px', color: 'white', lineHeight: '28px', paddingBottom: '24px'}}> To test a new product concept, frog developed of a pilot application that was delivered to a target segment of PMI members. Developed and deployed in a rapid two month timeframe, the full-stack application gave PMI a learning tool to evaluate user behavior and experiment with product features. </p>
					<p style={{fontSize: '16px', color: 'white'}}> React / Progressive Web App / Redux </p>
				</div>
				<div className={globals.spacer}/>
				<FontAwesomeIcon icon={faCircle} style={{color: 'white'}}/>
				<div className={globals.spacer}/>
			</div>
		)
	}
}