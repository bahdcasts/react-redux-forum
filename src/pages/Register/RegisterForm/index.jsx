import React from 'react';

const RegisterForm = () => (
  <div className="card">
    <div className="card-header">Register</div>
    <div className="card-body">
      <form method="POST" action="#">
        <div className="form-group row">
          <label htmlFor="name" className="col-sm-4 col-form-label text-md-right">Name</label>
          <div className="col-md-6">
            <input id="name" type="text" className="form-control is-invalid" name="name" required autoFocus />
            <span className="invalid-feedback">
              <strong>The name is required.</strong>
            </span>
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
          <div className="col-md-6">
            <input id="email" type="email" className="form-control" name="email" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label text-md-right">Password</label>
          <div className="col-md-6">
            <input id="password" type="password" className="form-control" name="password" required />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password_confirmation" className="col-sm-4 col-form-label text-md-right">Confirm password</label>
          <div className="col-md-6">
            <input id="password_confirmation" type="password" className="form-control" name="password_confirmation" required />
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

export default RegisterForm;
