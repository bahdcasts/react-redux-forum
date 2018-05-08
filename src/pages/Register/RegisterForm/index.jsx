import React, { Fragment } from 'react'
import isEmail from 'validator/lib/isEmail'
import { reduxForm, Field } from 'redux-form'

const RenderField = ({
  input, meta: { error, touched }, type
}) => ((
  <Fragment>
    <input type={type} {...input} className={touched && error ? 'form-control is-invalid': 'form-control'}/>
    {touched && error && error.map((e, index) => <span key={index} className="invalid-feedback"><strong>{e}</strong></span>)}
  </Fragment>
))

const RegisterForm = ({ handleSubmit, valid, submitting }) => (
  <div className="card">
    <div className="card-header">Register</div>
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-4 col-form-label text-md-right">Name</label>
          <div className="col-md-6">
            <Field id="name" component={RenderField} type="text" name="name" required autoFocus />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
          <div className="col-md-6">
            <Field component={RenderField} id="email" type="email" name="email" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label text-md-right">Password</label>
          <div className="col-md-6">
            <Field component={RenderField}  id="password" type="password" name="password" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password_confirmation" className="col-sm-4 col-form-label text-md-right">Confirm password</label>
          <div className="col-md-6">
            <Field component={RenderField} id="password_confirmation" type="password" name="password_confirmation" required />
          </div>
        </div>
        <div className="form-group row mb-0">
          <div className="col-md-8 offset-md-4">
            <button type="submit" className="btn btn-primary"
              disabled={!valid || submitting}
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

const validateRegistrationForm = (values) => {
  let errors = {}

  if (!values.email) {
    errors.email = ['The email is required.']
  } else {
    if (!isEmail(values.email)) {
      errors.email = ['The email is invalid.']
    }
  }

  if (!values.name) {
    errors.name = ['The name is required.']
  } else {
    if (values.name.length > 15) {
      errors.name = ['The name must not be longer than 15 characters.']
    }
  }

  if (!values.password) {
    errors.password = ['The password is required.']
  } else {
    if (values.password !== values.password_confirmation) {
      errors.password = ['The password confirmation does not match.']
    }
  }

  return errors
}

export default reduxForm({
  form: 'register-form',
  validate: validateRegistrationForm
})(RegisterForm);
