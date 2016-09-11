import * as React from 'react';
import {Link} from 'react-router';
import AuthService from '../../services/AuthService';

export default class Login extends React.Component<{}, {}> {
  login() {
    AuthService.setAuth(true);
  }

  render() {
    return (
      <div className="view login">
        <div className="form-block">
          <div className="login-logo">
            Welcome to NMM
          </div>
          <div className="login-form">
            <div className="form-field">
              <input className="form-field-input"
                  type="text"
                  placeholder="User" />
            </div>
            <div className="form-field">
              <input className="form-field-input"
                  type="password"
                  placeholder="Password" />
            </div>
          </div>
          <div className="login-buttons">
            <Link to="/home"
                activeClassName="active"
                onClick={this.login}
                className="button">
              Log in
            </Link>
            <Link to="/register"
                activeClassName="active"
                className="button">
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
