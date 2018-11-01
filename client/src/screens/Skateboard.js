import React, { Component } from 'react';
import skateboard1 from '../res/img/skateboard_4.JPG';
import skateboard2 from '../res/img/skateboard_1.jpg';
import styles from '../index.module.scss';
import globals from '../globals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import MediaQuery from 'react-responsive';

export default class Skateboard extends Component {
	render(){
		return (
			<div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#da2f00'}}>
				<div style={{fontSize: 0}}>
					<MediaQuery maxDeviceWidth={768}>
						<img src={skateboard1} style={{width: '100%'}}/>
						<img src={skateboard2} style={{width: '100%'}}/>
					</MediaQuery>
					<MediaQuery minDeviceWidth={768}>
						<img src={skateboard1} style={{width: '50%'}}/>
						<img src={skateboard2} style={{width: '50%'}}/>
					</MediaQuery>
				</div>
				<div className={globals.spacer}/>
				<div className={globals.container} style={{display: 'flex', flexDirection: 'column'}}>
					<h1 style={{fontSize: '24px', color: 'white', fontWeight: 400, paddingBottom: '36px', letterSpacing: '2px'}}> TOTALLY TUBULAR! </h1>
					<p style={{fontSize: '24px', color: 'white', lineHeight: '28px', paddingBottom: '24px'}}> Originally coined in the 80s by the surfers as a way to say ‘cool’, TOTALLY TUBULAR! has been appropriated by the skaters, hipsters and now us, the artists of this piece. Taking the meaning of this phrase to its literal meaning, we present you a skateboard that is made totally tubular.  - Wipawe Sirikolkarn (partner in crime) </p>
					<p style={{fontSize: '16px', color: 'white'}}> Plastic Tubes / LED / Zip Ties </p>
				</div>
				<div className={globals.spacer}/>
				<FontAwesomeIcon icon={faCircle} style={{color: 'white'}}/>
				<div className={globals.spacer}/>
			</div>
		)
	}
}