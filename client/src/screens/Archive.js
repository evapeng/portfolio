import React from 'react';
import globals from '../globals.module.scss'
import styles from '../index.module.scss';
import archive from '../archive.module.scss';
import cat from '../res/img/cat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';
import ScrollableAnchor from 'react-scrollable-anchor';
export default class Archive extends React.Component {
	constructor(props){
		super(props);
		this.goToWork = this.goToWork.bind(this);

	}
	goToWork(index){
		document.getElementById('bodyOfWork').style.cssText = 'height: auto; overflow-y: scroll';
		window.location.href = `#work${index}`;
		setTimeout(() => this.props.closeFnc(), 500)
		
	}
	render(){
		return (
			<div className={this.props.open? [archive.archive, archive.archiveOpen].join(' ') : archive.archive}>
				<FontAwesomeIcon icon={faTimes} className={archive.archive__close} onClick={this.props.closeFnc}/>
				<div className={archive.archive__header}>
					<h1> TITLE </h1>
					<h1> TYPE </h1>
					<h1> TIME </h1>
				</div>
				<div className={archive.archive__line} onClick={() => this.goToWork(1)}>
					<h1> Project Management Institute </h1>
					<h1> Mobile App </h1>
					<h1> 3 Months </h1>
				</div>
				<div className={archive.archive__line} onClick={() => this.goToWork(2)}>
					<h1> Friedolin Voice Assistant </h1>
					<h1> Voice Application </h1>
					<h1> 2 Weeks </h1>
				</div>
				<div className={archive.archive__line} onClick={() => this.goToWork(3)}>
					<h1> TOTALLY TUBULAR! </h1>
					<h1> Artwork </h1>
					<h1> 2 weeks </h1>
				</div>
				<div className={archive.archive__line} onClick={() => this.goToWork(4)}>
					<h1> 2018 Calendar </h1>
					<h1> Design </h1>
					<h1> 3 weeks </h1>
				</div>
				<div className={archive.archive__line} onClick={() => this.goToWork(5)}>
					<h1> JetBlack Voice Assistant </h1>
					<h1> Physical Prototyping, Web App </h1>
					<h1> 3 Months </h1>
				</div>
				<div className={archive.archive__line} onClick={() => this.goToWork(6)}>
					<h1> Traveler's Insurance </h1>
					<h1> Design Language System </h1>
					<h1> 2 Months </h1>
				</div>
			</div>
		)
	}
}