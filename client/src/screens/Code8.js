import React, { Component } from 'react';
import code8 from '../res/img/code8_1.jpg';
import code8c from '../res/img/code8_3.png';
import styles from '../index.module.scss';
import globals from '../globals.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle } from '@fortawesome/free-solid-svg-icons';
import { fetchData } from '../config/helpers.js';
import { TokenContext, serverURL } from '../config/helpers.js';
import MediaQuery from 'react-responsive';

class Code8 extends Component {
	constructor(props){
		super(props);
		this.state = {images: ['code8_1.jpg', 'code8_2.jpg', 'code8_3.png', 'code8_4.mp4']};
	}


	render(){
		return (
				<div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#000000'}}>
					<div>
						<MediaQuery maxDeviceWidth={768}>
							<img src={code8} style={{width: '100%'}} onError={
								(e)=>{ e.target.src=window.location.origin + '/locked.png'; e.target.style.width= '100%'; }
							}/>
							<img src={`${serverURL}${this.state.images[1]}?id=${this.context}`} style={{width: '100%'}} onError={
								(e)=>{ e.target.src=window.location.origin + '/locked.png'; e.target.style.width= '100%'; }
							}/>
						</MediaQuery>
						<MediaQuery minDeviceWidth={768}>
							<img src={code8} style={{width: '53.35%'}} onError={
								(e)=>{ e.target.src=window.location.origin + '/locked.png'; e.target.style.width= '53.35%'; }
							}/>
							<img src={`${serverURL}${this.state.images[1]}?id=${this.context}`} style={{width: '46.65%'}} onError={
								(e)=>{ e.target.src=window.location.origin + '/locked.png'; e.target.style.width= '46.65%'; }
							}/>
						</MediaQuery>
						<div className={globals.spacer}/>
						<MediaQuery maxDeviceWidth={768}>
							<img src={`${serverURL}${this.state.images[2]}?id=${this.context}`} style={{width: '90%'}} onError={
							(e)=>{ e.target.src=window.location.origin + '/locked.png'; e.target.width= '90%'; }
							}/>
							<video controls
							   muted
							   src={`${serverURL}${this.state.images[3]}?id=${this.context}`}
							   width='90%'
							>
							Sorry, your browser doesn't support embedded videos.
							</video>
						</MediaQuery>
						<MediaQuery minDeviceWidth={768}>
							<img src={`${serverURL}${this.state.images[2]}?id=${this.context}`} style={{width: '60%'}} onError={
							(e)=>{ e.target.src=window.location.origin + '/locked.png'; e.target.width= '50%'; }
							}/>
							<video controls
							   muted
							   src={`${serverURL}${this.state.images[3]}?id=${this.context}`}
							   width='60%'
							>
							Sorry, your browser doesn't support embedded videos.
							</video>
						</MediaQuery>
					</div>
					<div className={globals.spacer}/>
					<div className={globals.container} style={{display: 'flex', flexDirection: 'column'}}>
						<h1 style={{fontSize: '24px', color: 'white', fontWeight: 400, paddingBottom: '36px', letterSpacing: '2px'}}> JetBlack Voice Assistant </h1>
						<p style={{fontSize: '24px', color: 'white', lineHeight: '28px', paddingBottom: '24px'}}> Design the UX and prototype the illumination for a voice assistant device for Jetblack that elevates and reinforces the elegance, luxury and convenience of the Jetblack brand experience. </p>
						<p style={{fontSize: '16px', color: 'white'}}> PI / Web </p>
					</div>
					<div className={globals.spacer}/>
					<FontAwesomeIcon icon={faCircle} style={{color: 'white'}}/>
					<div className={globals.spacer}/>
				</div>
		)
	}
}

Code8.contextType = TokenContext;
export default Code8;