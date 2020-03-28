import React from 'react';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import { START_DATE, END_DATE } from 'react-dates/constants';

import css from 'react-dates/lib/css/_datepicker.css';
class BookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focused: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const trip = {
        startdate: this.state.startDate,
        end_date: this.state.endDate,
      };
  }

  render() {
    <input type='submit'/>;
    return (
        <div className='booking-form-container'>
          <h1>Pick the Dates</h1>
          <form className='form-container'
            onSubmit={this.handleSubmit}>
              <DateRangePicker
                startDateId={this.state.startDate}
                endDateId={this.state.endDate}
                startDate={this.state.startDate}
                endDate={this.state.endDate}
                focusedInput={this.state.focused}
                onDatesChange=
                {({ startDate, endDate }) => { this.setState({ startDate, endDate }); }}
                onFocusChange={ (focused)  => { this.setState({ focused }); }}
                />
          </form>
        </div>
    );
  }

}

export default BookingForm;