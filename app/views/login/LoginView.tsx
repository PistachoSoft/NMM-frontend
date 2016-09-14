import * as React from 'react';
import {Link, browserHistory} from 'react-router';
import AuthService from '../../services/AuthService';
import LoginService from '../../services/LoginService';
import {ITokenResponse} from '../../models/responses/ITokenResponse';
import {IErrorResponse} from '../../models/responses/IErrorResponse';

export default class LoginView extends React.Component<{}, {}> {
  /**
   * Login View Handler
   *
   * @param {Event} e - submit event.
   */
  public login(e: Event) {
    let user: HTMLInputElement = this.refs['user'] as HTMLInputElement,
      pass: HTMLInputElement = this.refs['pass'] as HTMLInputElement;

    e.preventDefault();

    LoginService.login(user.value, pass.value).then((data: ITokenResponse) => {
      AuthService.setAuth(data.token);

      browserHistory.push('/home');
    }).catch((data: IErrorResponse) => {
      // Oops
    });
  }

  public render() {
    return (
      <div className="view login">
        <form className="form-block"
            onSubmit={this.login.bind(this)}>
          <div className="login-logo">
            Welcome to NMM
          </div>
          <div className="login-form">
            <div className="form-field">
              <input className="form-field-input"
                  ref="user"
                  type="text"
                  placeholder="User" />
            </div>
            <div className="form-field">
              <input className="form-field-input"
                  ref="pass"
                  type="password"
                  placeholder="Password" />
            </div>
          </div>
          <div className="login-buttons">
            <button type="submit" className="button">
              Log in
            </button>
            <Link to="/register" className="button">
              Register
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
