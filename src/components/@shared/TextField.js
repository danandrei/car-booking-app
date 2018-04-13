import React from 'react';

const TextField = ({
  input,
  label,
  type,
  id,
  meta: {
    touched,
    error,
  },
}) => (
  <div className="form-label-group">
    <input
      {...input}
      type={type}
      id={id}
      className={(touched && error) ? 'form-control error' : 'form-control'}
      placeholder={label}
    />
    {touched && error && <span className="error">{error}</span>}
    <label htmlFor={id}>{label}</label>
  </div>
);

export default TextField;
