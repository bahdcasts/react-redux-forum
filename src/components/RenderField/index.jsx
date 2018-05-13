import React, { Fragment } from 'react'

const RenderField = ({
  input, meta: { error, touched }, type
}) => ((
  <Fragment>
    <input type={type} {...input} className={touched && error ? 'form-control is-invalid': 'form-control'}/>
    {touched && error && error.map((e, index) => <span key={index} className="invalid-feedback"><strong>{e}</strong></span>)}
  </Fragment>
))

export default RenderField
