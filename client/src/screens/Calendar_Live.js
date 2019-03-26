import React, { Component } from 'react';
import calendar_styles from './calendar.module.css';
var classNames = require('classnames');

const COLUMNS = 14;
const ROWS = 27;
const YEAR = new Date().getFullYear();
const MONTHS = [31, daysInMonth(1), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const MONTHS_NAME = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
const FULL_MOONS_19 = [21, 19, 20, 19, 18, 17, 16, 15, 14, 13, 12, 12];
const MIY = 12;
const DAYS = MONTHS.reduce((acc, val) => acc + val);
const FIRST = (new Date(YEAR, 0, 1).getDay() + 6) % 7;


function daysInMonth(month){
  if (month < 0 || month > 11) return 0; 
  if (month === 1) {
    // Is it a leap year
    return (YEAR % 4 === 0 && !(YEAR % 100 === 0 && YEAR % 400 !== 0))? 29 : 28;
  }
  else return MONTHS[month];
}

function renderCell(content, holiday, index, cb, fm){
  return (
    <div className='cellWrapper' key={index}>
      <div className='cell'>
        <div className='cellInner'>
          <p className='date'>{content}</p>
          <div className='icons'>
            {
              fm? 
              <span className='icon-moon'/>
              :
              null
            }
            {
              holiday?
              <span className='holiday' onClick={() => cb(undefined, index)}> <span> {holiday} </span> </span>
              :
              null
            }
          </div>
        </div>
        {
          !holiday?
          <input type="text" name="fname" onBlur={(event) => cb(event.target.value, index)} onKeyUp={(event) => { if(event.keyCode === 13) cb(event.target.value, index)}}/>
          :
          null
        }
      </div>
    </div>)
}

function renderCellWithLabel(content, letter, holiday, index, cb, fm){
  return (
    <div className='cellWrapper' key={index}>
      <div className='cell'>
        <div className='cellInner'>
          <p className='date'>{content}</p>
          <p className='label'>
            {letter}
          </p>
          <div className='icons'>
            {
              fm? 
              <span className='icon-moon'/>
              :
              null
            }
            {
              holiday?
              <span className='holiday' onClick={() => cb(undefined, index)}> <span> {holiday} </span> </span>
              :
              null
            }
          </div>
        </div>
        {
          !holiday?
          <input type="text" name="fname" onBlur={(event) => cb(event.target.value, index)} onKeyUp={(event) => { if(event.keyCode === 13) cb(event.target.value, index)}}/>
          :
          null
        }
      </div>
    </div>
  )
}

function renderCells(state, cb){
  let cells = [];
  let indexTotal = 0;
  for (var i = 0; i < FIRST; i++) {
    cells.push(renderCell(`${12}.${31 - i}`, state.holidays[indexTotal], indexTotal, (val, index) => cb(index, val)));
    indexTotal++;
  }
  for (var i = 0; i < MIY; i++){
    for (var j = 0; j < MONTHS[i]; j++){
      if (j < 3) {
        cells.push(renderCellWithLabel(`${i + 1}.${j + 1}`, MONTHS_NAME[i][j], state.holidays[indexTotal], indexTotal, (val, index) => cb(index, val), YEAR === 2019 && FULL_MOONS_19[i] - 1 == j));
      }
      else cells.push(renderCell(`${i + 1}.${j + 1}`, state.holidays[indexTotal], indexTotal, (val, index) => cb(index, val), YEAR === 2019 && FULL_MOONS_19[i] - 1 == j));
      indexTotal++;
    }
  }
  for (var i = 0; i < COLUMNS * ROWS - (FIRST + DAYS); i++){
    cells.push(renderCell(`${1}.${i + 1}`, state.holidays[indexTotal], indexTotal, (val, index) => cb(index, val)));
    indexTotal++;
  }
  return cells;
}
class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = { holidays: new Array(COLUMNS * ROWS) }
    this.addHoliday = this.addHoliday.bind(this);
  }

  addHoliday(index, item){
    let newArr = [...this.state.holidays];
    newArr[index] = item;
    this.setState({holidays: newArr});
  }

  render() {
    return (
      <div className="App">
        <div className='calendarWrapper'>
          <div className='description'>
            <p> FILL EVENTS <span style={{textDecoration: 'underline'}}>BELOW</span> THE DATE </p>
            <p className='icon-moon'> <span> = FULL MOON BEWARE OF WEREWOLF </span> </p>
          </div>
          <div className='calendar' style={{display: 'grid', textAlign: 'left', gridTemplate: `0.7fr repeat(${ROWS}, 1fr) / repeat(${COLUMNS}, 1fr)`}}>
            <p className='header'> MON </p>
            <p className='header'> TUE </p>
            <p className='header'> WED </p>
            <p className='header'> THU </p>
            <p className='header'> FRI </p>
            <p className={classNames('header', 'weekend')}> SAT </p>
            <p className={classNames('header', 'weekend')}> SUN </p>
            <p className='header'> MON </p>
            <p className='header'> TUE </p>
            <p className='header'> WED </p>
            <p className='header'> THU </p>
            <p className='header'> FRI </p>
            <p className={classNames('header', 'weekend')}> SAT </p>
            <p className={classNames('header', 'weekend')}> SUN </p>
            { renderCells(this.state, this.addHoliday) }
          </div>
        </div>
      </div>
    );
  }
}

export default Calendar;
