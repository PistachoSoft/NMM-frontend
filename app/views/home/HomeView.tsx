import * as React from 'react';
import {Link} from 'react-router';
import Navbar from '../../components/navbar/Navbar';
import Player from '../../components/player/Player';

export default class Home extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="view home">
        <Navbar/>
        <div className="home-explorer">
          <div className="sections">
            <div className="section">
              <Link
                  to="/home/artists"
                  activeClassName="active"
                  className="section-link">
                Artists
              </Link>
            </div>
            <div className="section">
              <Link
                  to="/home/albums"
                  activeClassName="active"
                  className="section-link">
                Albums
              </Link>
            </div>
            <div className="section">
              <Link
                  to="/home/songs"
                  activeClassName="active"
                  className="section-link">
                Songs
              </Link>
            </div>
          </div>
          <div className="browser">
            {this.props.children}
          </div>
        </div>
        <Player/>
      </div>
    );
  }
}
