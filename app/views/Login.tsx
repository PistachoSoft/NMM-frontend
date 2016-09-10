import * as React from 'react';
import {Link} from 'react-router';
import AuthService from '../services/AuthService';

export default class Login extends React.Component<{}, {}> {
  login() {
    AuthService.setAuth(true);
  }

  render() {
    return (
      <div>
        Login
        <Link to="/home" activeClassName="active" onClick={this.login}>Log in</Link>
        <Link to="/register" activeClassName="active">Register</Link>
      </div>
    );
  }
}
