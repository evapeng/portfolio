import React, { Component } from 'react';
import voice1 from '../res/img/voice_1.jpg';
import voice2 from '../res/img/voice_2.jpg';
import styles from '../index.module.scss';
import globals from '../globals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

export default class Voice extends Component {
	render(){
		return (
			<div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#1FA152'}}>
				<div style={{fontSize: 0}}>
					<MediaQuery maxDeviceWidth={768}>
						<img src={voice2} style={{width: '100%'}}/>
						<img src={voice1} style={{width: '100%'}}/>
					</MediaQuery>
					<MediaQuery minDeviceWidth={768}>
						<img src={voice2} style={{width: '26.68%'}}/>
						<img src={voice1} style={{width: '73.32%'}}/>
					</MediaQuery>
				</div>
				<div className={globals.spacer}/>
				<div className={globals.container} style={{display: 'flex', flexDirection: 'column'}}>
					<h1 style={{fontSize: '24px', color: 'white', fontWeight: 400, paddingBottom: '36px', letterSpacing: '2px'}}> Friedolin the Voice Assistant </h1>
					<p style={{fontSize: '24px', color: 'white', lineHeight: '28px', paddingBottom: '24px'}}> "Friedolin, show me the project we worked on for Walmart last year?" For my bench project, I worked on a voice assistant with a custom hotword that controls the lobby screens and an ipad for displaying case studies. </p>
					<p style={{fontSize: '16px', color: 'white'}}> PI / Amazon Lex / Snowboy / Express / React</p>
				</div>
				<div className={globals.spacer}/>
				<FontAwesomeIcon icon={faCircle} style={{color: 'white'}}/>
				<div className={globals.spacer}/>
			</div>
		)
	}
}