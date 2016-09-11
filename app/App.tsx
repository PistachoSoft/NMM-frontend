import * as React from 'react';
import {
  Router,
  Route,
  RouterState,
  IndexRedirect,
  browserHistory
} from 'react-router';
import Login from './views/login/Login';
import Home from './views/home/Home';
import Register from './views/register/Register';
import Artists from './views/artists/Artists';
import Artist from './views/artist/Artist';
import Albums from './views/albums/Albums';
import Album from './views/album/Album';
import Songs from './views/songs/Songs';
import AuthService from './services/AuthService';

export default class App extends React.Component<{}, {}> {
  constructor() {
    super();
  }

  getFirstPage() {
    return AuthService.isAuth() ? '/home' : '/login';
  }

  requireAuth(next: RouterState, replace: Function) {
    if (!AuthService.isAuth()) {
      replace({
        pathname: '/',
        state: { nextPathname: next.location.pathname }
      });
    }
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRedirect to={this.getFirstPage()} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/home" component={Home} onEnter={this.requireAuth}>
            <IndexRedirect to="songs" />
            <Route path="artists" component={Artists} />
            <Route path="artists/:id" component={Artist} />
            <Route path="albums" component={Albums} />
            <Route path="albums/:id" component={Album} />
            <Route path="songs" component={Songs} />
          </Route>
        </Route>
      </Router>
    );
  }
}
