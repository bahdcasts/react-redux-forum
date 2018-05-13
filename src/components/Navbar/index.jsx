import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { logoutUser } from '../../store/actions/auth'

const Navbar = ({ user, logoutUser }) => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-forum">
    <div className="container">
      <Link className="navbar-brand" to="/">React-Forum</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto" />
        <ul className="navbar-nav ml-auto">
          {
            user &&
            <li className="nav-item dropdown">
              <a id="navbarDropdown" className="nav-link dropdown-toggle" href="" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {user.name}<span className="caret" />
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/" onClick={logoutUser}>
                  Logout
                </Link>
              </div>
            </li>
          }
          {
            !user &&
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
          }
          {
            !user &&
            <li className="nav-item">
              <Link className="nav-link" to="/register">Register</Link>
            </li>
          }
        </ul>
      </div>
    </div>
  </nav>

);

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
