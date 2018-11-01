import React, { Component } from 'react';
import styles from '../index.module.scss';

const STATUSES = [
	'planning my next vacation',
	'online shopping',
	'design technologist @ frog',
	'looking at memes',
	'making tea',
	'surfing @ the rockaways',
	'walking around',
	''
]


export default class Cube extends Component {
	constructor(props){
		super(props);
		this.state = { curStatus: 0, curCube: 0 }
	}

	componentDidMount(){
		var rotateStatus = setInterval(() => {
			this.setState({curStatus: (this.state.curStatus + 1) % STATUSES.length})
		}, 4000)
	}

	componentDidUpdate(prevProps, prevState){
		if (this.state.curStatus !== prevState.curStatus) this.setState({curCube: (this.state.curCube + 1) % 4});
	}

	render(){
		return(
			<div className={[styles.cube, styles[`cube${this.state.curCube}`]].join(' ')}>
				<span className={[styles.status, styles.frontStatus].join(' ')}> planning my next vacation </span>
				<span className={[styles.status, styles.bottomStatus].join(' ')}> design technologist @ frog </span>
				<span className={[styles.status, styles.backStatus].join(' ')}> looking at memes </span>
				<span className={[styles.status, styles.topStatus].join(' ')}> online shopping </span>
				
				{/**<span className={styles.status}> { STATUSES[this.state.curStatus] } </span>
				<span className={[styles.status, styles.nextStatus].join(' ')}> { STATUSES[(this.state.curStatus + 1) % STATUSES.length] } </span>**/}
			</div>
		)
	}
}