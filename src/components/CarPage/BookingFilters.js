import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker from '../@shared/DatePicker';

const BookingFilters = props => {
  const { error, handleSubmit, submitting, handleChange } = props;
  return (
    <div className="mb-4">
      <form className="" onSubmit={handleSubmit}>
        <h3>Bookings for this car</h3>
        <div className="row">
          <div className="col">
            <Field
              label="From:"
              name="startDate"
              showTime={false}
              component={DatePicker}
              onChange={handleChange}
            />
          </div>
          <div className="col">
            <Field
              label="To:"
              name="endDate"
              showTime={false}
              component={DatePicker}
              onChange={handleChange}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'carBookingFilters',
})(BookingFilters);
