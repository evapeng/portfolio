import React from 'react';
import globals from '../globals.module.scss'
import styles from '../index.module.scss';
import house from '../house.module.scss';
import person from "../res/img/person1.png"
import person2 from "../res/img/person2.png"
import cat from "../res/img/cat.png"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle, faTimes, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import PMI from './PMI.js';
import Voice from './Voice.js';
import Skateboard from './Skateboard.js';
import Calendar from './Calendar.js';
import Code8 from './Code8.js';
import Travelers from './Travelers.js';
import About from './About.js';
import Archive from './Archive.js';
import Cube from './Cube.js';
import ScrollableAnchor from 'react-scrollable-anchor';
import request from 'request';
import MediaQuery from 'react-responsive';
import { isMobile } from 'react-device-detect';
import { TokenContext } from '../config/helpers.js';

export default class Main extends React.Component {
	constructor(){
		super();
		this.scrollElements = this.scrollElements.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = { scrollDir: null, aboutOpen: false, curStatus: 0, curCube: 0, token: '', status: 0, archiveOpen: false }
	}


	scrollElements (e) {
		if (this.header) {
			var viewportOffset = this.header.getBoundingClientRect();
			if (window.innerHeight - viewportOffset.bottom > 0) {
				this.setState({scrollDir: 'up'})
			}
			else this.setState({scrollDir: 'down'})
		}
	}

	componentDidMount(){
		document.addEventListener('wheel', this.scrollElements);
		document.addEventListener('mousewheel', this.scrollElements);
		document.addEventListener('DOMMouseScroll', this.scrollElements);
	}

	handleChange(event) {
		this.setState({token: event.target.value});
		if (event.target.value){
			request(`https://evapeng-server.herokuapp.com/?id=${event.target.value}`, (error, response, body) => {
				if (response && response.statusCode === 200 || response.statusCode === 404) {
					this.setState({status: 1})
					if (this.input) this.input.blur();
				}
			});
		}

	}

	render(){
		let arrowStyle = styles.scrollHeader;
		switch(this.state.scrollDir){
			case 'down':
				arrowStyle += ` ${styles.scrollDown}`;
				break;
			case 'up':
				arrowStyle += ` ${styles.scrollUp}`;
				break;
		}
		if (typeof this.state.scrollUp === null) arrowStyle = styles.scrollUp
		return (
				<div className = {styles.content}>
					<div className = {styles.header}>
						<div className={styles.headerLeft}>
							<span className={styles.logo}>
								Eva Peng
							</span>
							<div className={styles.links}>
								<a className={globals.link} target='_blank' href='https://www.instagram.com/_evapeng/'><FontAwesomeIcon icon={faInstagram} style={{margin: 5}}/></a>
								<a className={globals.link} target='_blank' href='https://www.linkedin.com/in/eva-peng-096035115/'><FontAwesomeIcon icon={faLinkedin} style={{margin: 5}}/></a>
								<a className={globals.link} target='_blank' href='https://github.com/evapeng'><FontAwesomeIcon icon={faGithubSquare} style={{margin: 5}}/></a>
							</div>
						</div>
						<span className={styles.unlockContent}>
							<input type='text' placeholder='unlock content' className={styles.input} onChange={this.handleChange} disabled={this.state.status} ref={ref => this.input = ref }/>
							<FontAwesomeIcon icon={faCheckCircle} style={{color: this.state.status? 'green' : 'red'}}/>
						</span>
						<div className={styles.cube_container}>
							<div style={{perspective: '800px', position: 'relative', right: '350px', display: 'flex', alignItems: 'center'}}>
								<span style={{fontSize: 18, letterSpacing: 1}}> current: </span>
							</div>
							<Cube/>
						</div>
					</div>
					<div className = {house.house__container}>
						<div className = {house.house__container__inner}>
							<div className = {house.house}>
								{ isMobile? 
									<a href='#work1'>
										<div className = {house.house__left}> 
											<div className = {house.house__left__text}>
												<h1> work </h1>
											</div>
										</div>
									</a>
									:
									<div className = {house.house__left}> 
										<a href='#work1' className = {globals.link}>
											<div className = {house.house__left__text}>
												<h1> work </h1>
											</div>
										</a>
									</div>
								}
								{ isMobile? 
									<div className = {house.house__bottom} onClick={() => this.setState({archiveOpen: !this.state.archiveOpen})}> 
										<div className = {globals.link}>
											<div className = {house.house__bottom__text}> <h1> archive </h1> </div>
										</div>
										<img src = {person} alt = "" className = {styles.figure}/>
										<img src = {person2} alt = "" className = {styles.figure2}/>
									</div>
									:
									<div className = {house.house__bottom}> 
										<div className = {globals.link} onClick={() => this.setState({archiveOpen: !this.state.archiveOpen})}>
											<div className = {house.house__bottom__text}> <h1> archive </h1> </div>
										</div>
										<img src = {person} alt = "" className = {styles.figure}/>
										<img src = {person2} alt = "" className = {styles.figure2}/>
									</div>
								}
								{ isMobile? 
									<div className = {house.house__right} onClick={() => this.setState({aboutOpen: !this.state.aboutOpen})}> 
										<div className = {globals.link}>
											<div className = {house.house__right__text}> <h1> me </h1> </div> 
										</div>
									</div>
									:
									<div className = {house.house__right}> 
										<div className = {globals.link} onClick={() => this.setState({aboutOpen: !this.state.aboutOpen})}>
											<div className = {house.house__right__text}> <h1> me </h1> </div> 
										</div>
									</div>
								}
								{ isMobile? 
									<a href='#work3'> 
										<div className = {house.house__basement}>
											<div className = {house.house__basement__text}>
												<h1> fun </h1>
											</div>
										</div>
									</a>
									:
									<div className = {house.house__basement}>
										<a href='#work3' className = {globals.link}> 
											<div className = {house.house__basement__text}>
												<h1> fun </h1>
											</div>
										</a>
									</div>
								}
							</div>
							<div className = {house.ground}> </div>
						</div>
					</div>
					<div className = {styles.mainContent}>
						<div className = {arrowStyle} ref={ header => this.header = header }>
							<MediaQuery maxDeviceWidth={768}>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
							</MediaQuery>
							<MediaQuery minDeviceWidth={768}>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
								<FontAwesomeIcon icon={faArrowUp} style={{fontSize: 40}}/>
							</MediaQuery>
						</div>
						<div className={styles.work} style={this.state.aboutOpen || this.state.archiveOpen? {height: 0, overflow: 'hidden'} : null} id='bodyOfWork'>
							<TokenContext.Provider value={this.state.token}>
								<ScrollableAnchor id={'work1'}>
									<PMI/>
								</ScrollableAnchor>
								<ScrollableAnchor id={'work2'}>
									<Voice/>
								</ScrollableAnchor>
								<ScrollableAnchor id={'work3'}>
									<Skateboard/>
								</ScrollableAnchor>
								<ScrollableAnchor id={'work4'}>
									<Calendar/>
								</ScrollableAnchor>
								<ScrollableAnchor id={'work5'}>
									<Code8/>
								</ScrollableAnchor>
								<ScrollableAnchor id={'work6'}>
									<Travelers/>
								</ScrollableAnchor>
							</TokenContext.Provider>
						</div>
					</div>
					<About open={this.state.aboutOpen} closeFnc={() => {this.setState({aboutOpen: !this.state.aboutOpen})}}/>
					<Archive open={this.state.archiveOpen} closeFnc={() => {this.setState({archiveOpen: !this.state.archiveOpen})}}/>
				</div>
		)
	}
}