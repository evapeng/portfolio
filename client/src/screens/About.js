import React from 'react';
import globals from '../globals.module.scss'
import styles from '../index.module.scss';
import about from '../about.module.scss';
import cat from '../res/img/cat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons';

export default class About extends React.Component {
	render(){
		return (
			<div className={this.props.open? [about.about, about.aboutOpen].join(' ') : about.about}>
				<FontAwesomeIcon icon={faTimes} className={about.about__close} onClick={this.props.closeFnc}/>
				<div className={about.about__line}>
					<h1 className={about.about__line__text}> I went to architecture school </h1>
					<h1 className={about.about__line__textReveal}> It wasn't really for me. </h1>
				</div>
				<div className={about.about__line}>
					<h1 className={about.about__line__text}> I learned to code </h1>
					<h1 className={about.about__line__textReveal}> I'm still learning. </h1>
				</div>
				<div className={about.about__line}>
					<h1 className={about.about__line__text}> I am a human being </h1>
					<h1 className={about.about__line__textReveal}> I enjoy soccer, surfing, sports in general. I’m slowly learning Spanish. I like techno. </h1>
				</div>
				<div className={about.about__line} style={{position: 'relative'}}>
					<h1 className={about.about__line__text}> I have a cat </h1>
					<h1 className={about.about__line__textReveal}> Her name is Luna. </h1>
					<img className={about.about__line__imageReveal} src={cat} style={{width: '300px', height: '300px', right: '-100px', top: '-30px', position: 'absolute'}}/>
				</div>
				<div className={about.about__line} style={{position: 'relative'}}>
					<h1 className={about.about__line__text}> I live in New York </h1>
					<h1 className={about.about__line__textReveal}> but I'm from Toronto. </h1>
				</div>
			</div>
		)
	}
}