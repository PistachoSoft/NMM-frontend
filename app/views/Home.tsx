import * as React from 'react';
import {Link} from 'react-router';
import AuthService from '../services/AuthService';

export default class Home extends React.Component<{}, {}> {
  logout() {
    AuthService.setAuth(false);
  }

  render() {
    return (
      <div>
        Home
        <nav className="navbar">
          Logged as Anon
          <Link to="/login" activeClassName="active" onClick={this.logout}>Log out</Link>
        </nav>
        <nav className="sections">
          <Link to="/home/artists" activeClassName="active">Artists</Link>
          <Link to="/home/albums" activeClassName="active">Albums</Link>
          <Link to="/home/songs" activeClassName="active">Songs</Link>
        </nav>
        <div className="view">
          {this.props.children}
        </div>
        <div>Player</div>
      </div>
    );
  }
}
