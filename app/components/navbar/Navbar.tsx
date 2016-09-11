import * as React from 'react';
import {Link} from 'react-router';
import AuthService from '../../services/AuthService';

export default class Navbar extends React.Component<{}, {}> {
  logout() {
    AuthService.removeAuth();
  }

  render() {
    return (
      <div className="navbar">
        <div className="navbar-logo">
          NMM
        </div>
        <div className="navbar-items">
            <span className="navbar-item">
              Hi, Anon
            </span>
          <Link to="/login"
            activeClassName="active"
            onClick={this.logout}
            className="button navbar-item">
            Log out
          </Link>
        </div>
      </div>
    );
  }
}
