import * as React from 'react';
import {
  Router,
  Route,
  RouterState,
  IndexRedirect,
  browserHistory
} from 'react-router';
import LoginView from './views/login/LoginView';
import HomeView from './views/home/HomeView';
import RegisterView from './views/register/RegisterView';
import ArtistsView from './views/artists/ArtistsView';
import ArtistView from './views/artist/ArtistView';
import AlbumsView from './views/albums/AlbumsView';
import AlbumView from './views/album/AlbumView';
import SongsView from './views/songs/SongsView';
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
          <Route path="/login" component={LoginView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/home" component={HomeView} onEnter={this.requireAuth}>
            <IndexRedirect to="songs" />
            <Route path="artists" component={ArtistsView} />
            <Route path="artists/:id" component={ArtistView} />
            <Route path="albums" component={AlbumsView} />
            <Route path="albums/:id" component={AlbumView} />
            <Route path="songs" component={SongsView} />
          </Route>
        </Route>
      </Router>
    );
  }
}
