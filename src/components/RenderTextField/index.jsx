import React, { Fragment } from 'react'

const RenderTextField = ({
  input, meta: { error, touched }, type
}) => ((
  <Fragment>
    <textarea {...input} className={touched && error ? 'form-control is-invalid': 'form-control'}/>
    {touched && error && error.map((e, index) => <span key={index} className="invalid-feedback"><strong>{e}</strong></span>)}
  </Fragment>
))

export default RenderTextField
