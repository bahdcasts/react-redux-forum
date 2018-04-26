import React from 'react';

const LoginForm = () => (
  <div className="card">
    <div className="card-header">Login</div>
    <div className="card-body">
      <form method="POST" action="#">
        <div className="form-group row">
          <label htmlFor="email" className="col-sm-4 col-form-label text-md-right">E-Mail Address</label>
          <div className="col-md-6">
            <input id="email" type="email" className="form-control" name="email" required autoFocus />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="password" className="col-sm-4 col-form-label text-md-right">Password</label>
          <div className="col-md-6">
            <input id="password" type="password" className="form-control" name="password" required />
          </div>
        </div>
        <div className="form-group row mb-0">
          <div className="col-md-8 offset-md-4">
            <button type="submit" className="btn btn-primary">
              Login
                  </button>
          </div>
        </div>
      </form>
    </div>
  </div>
);

export default LoginForm;
