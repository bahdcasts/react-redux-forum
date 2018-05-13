import React, { Fragment } from 'react'

const RenderField = ({
  input, meta: { error, touched }, type, children
}) => ((
  <Fragment>
    <select {...input} className={touched && error ? 'form-control is-invalid': 'form-control'}>
      {children}
    </select>
    {touched && error && error.map((e, index) => <span key={index} className="invalid-feedback"><strong>{e}</strong></span>)}
  </Fragment>
))

export default RenderField
