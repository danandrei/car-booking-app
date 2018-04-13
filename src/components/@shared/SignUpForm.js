import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { history } from '../../helpers/';
import TextField from './TextField';

const validate = values => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }

  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Required'
  } else if (values.password.length < 4) {
    errors.password = 'Must be 4 characters or more'
  }
  return errors
}

const SignUpForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <form className="form-signup" onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Sign up</h1>
      </div>
      <Field
        id="inputFirstName"
        type="text"
        label="First name"
        name="firstName"
        component={TextField}
      />
      <Field
        id="inputLatName"
        type="text"
        label="Last name"
        name="lastName"
        component={TextField}
      />
      <Field
        id="inputEmail"
        type="email"
        label="Email address"
        name="email"
        component={TextField}
      />
      <Field
        id="inputPassword"
        type="password"
        label="Password"
        name="password"
        component={TextField}
      />
      {error && <p className="error">{error}</p>}
      <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Sign up</button>

    </form>
  );
};

export default reduxForm({
  form: 'signUp',
  validate,
})(SignUpForm);
