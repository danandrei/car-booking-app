import React from 'react';
import 'react-widgets/dist/css/react-widgets.css';
import { DateTimePicker } from 'react-widgets';
import Moment from 'moment'
import momentLocalizer from 'react-widgets-moment';

Moment.locale('en');
momentLocalizer();

const DatePicker = ({
  input: {
    onChange,
    value,
  },
  showTime,
  label,
  meta: {
    touched,
    error,
  },
}) => (
  <div className="form-group">
    <label>{label}</label>
    <DateTimePicker
      onChange={onChange}
      format="DD MMM YYYY"
      time={false}
    />
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default DatePicker;
