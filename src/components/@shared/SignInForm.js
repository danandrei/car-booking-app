import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from './TextField';

const SignInForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <form className="form-signin" onSubmit={handleSubmit}>
      <div className="text-center mb-4">
        <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
        <p>Welcome back</p>
      </div>
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
      <button className="btn btn-primary btn-block" type="submit" disabled={submitting}>Sign in</button>
    </form>
  );
};

export default reduxForm({
  form: 'signIn',
})(SignInForm);
