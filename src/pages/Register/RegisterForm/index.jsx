import React, { Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'

const RenderField = ({
  input, meta: { error, touched }, type
}) => ((
  <Fragment>
    <input type={type} {...input} className={touched && error ? 'form-control is-invalid': 'form-control'}/>
    {touched && error && error.map(e => <span className="invalid-feedback"><strong>{e}</strong></span>)}
  </Fragment>
))

const RegisterForm = ({ handleSubmit }) => (
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
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'register-form'
})(RegisterForm);
