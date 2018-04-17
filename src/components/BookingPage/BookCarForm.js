import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import DatePicker from '../@shared/DatePicker';

const BookCarForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        label="Start Date"
        name="startDate"
        showTime={false}
        component={DatePicker}
      />
      <Field
        label="EndDate"
        name="endDate"
        showTime={false}
        component={DatePicker}
      />
      {error && <p className="error">{error}</p>}
      <button className="btn btn-block btn-primary" type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

export default  reduxForm({
  form: 'car',
})(BookCarForm);
