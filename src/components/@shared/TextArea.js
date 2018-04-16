import React from 'react';

const TextArea = ({
  input,
  label,
  id,
  meta: {
    touched,
    error,
  },
}) => (
  <div className="form-label-group">
    <textarea
      {...input}
      id={id}
      className={(touched && error) ? 'form-control error' : 'form-control'}
      placeholder={label}
    ></textarea>
    {touched && error && <span className="error">{error}</span>}
  </div>
);

export default TextArea;
