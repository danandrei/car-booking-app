import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from './TextField';
import TextArea from './TextArea';

const validate = values => {
  const errors = {}
  if (!values.make) {
    errors.make = 'Required'
  }

  if (!values.model) {
    errors.model = 'Required'
  }

  if (!values.year) {
    errors.year = 'Required'
  }

  if (values.year > 2018) {
    errors.year = 'A car cannot be from the future'
  }

  if (values.year < 1890) {
    errors.year = 'A car cannot be that old'
  }

  if (!values.description) {
    errors.description = 'Required'
  }

  return errors
}

const CarForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        id="inputMake"
        type="text"
        label="Make"
        name="make"
        component={TextField}
      />
      <Field
        id="inputModel"
        type="text"
        label="Model"
        name="model"
        component={TextField}
      />
      <Field
        id="inputYear"
        min="1900"
        max="2018"
        type="number"
        label="Year"
        name="year"
        component={TextField}
      />
      <Field
        id="inputDescription"
        label="Description"
        name="description"
        component={TextArea}
      />

      {error && <p className="error">{error}</p>}
      <button className="btn btn-block btn-primary" type="submit" disabled={submitting}>Submit</button>
    </form>
  );
};

let InitCarForm = reduxForm({
  form: 'car',
  enableReinitialize : true,
  validate,
})(CarForm);

InitCarForm = connect(
  state => ({
    initialValues: state.adminCars.selectedCar
  }),
)(InitCarForm);

export default InitCarForm;
