import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './main.css'

export default class Calender extends Component {
  state = {
    date: new Date(),
  }

  handleOnChange = date => this.setState({ date })
  handleClickDay = info => alert(info);

  render() {
    return (
      <div>
        
        <Calendar
          onClickDay={this.handleClickDay}
          onChange={this.handleOnChange}
          value={this.state.date}
        />
        <div className="indicators">
          <div className="occupied">
            occupied
          </div>
          <div className="semi-occupied">
            semi-occupied
          </div>
          <div className="un-occupied">
            un-occupied
          </div>

        </div>
      </div>
    );
  }
}