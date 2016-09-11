import * as React from 'react';
import {Link} from 'react-router';
import Songs from '../../views/songs/Songs';

export default class Artist extends React.Component<{}, {}> {
  render() {
    return (
      <div className="view artist">
        <div className="artist-info-large">
          <div className="artist-cover">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/36/Babymetalcover.jpg" className="artist-cover-image"/>
          </div>
          <div className="artist-details">
            <div className="artist-detail">Babymetal</div>
            <div className="artist-detail">3 albums</div>
          </div>
        </div>
        <div className="list albums">
          <div className="list-item">
            <Link to="/home/albums/1"
              activeClassName="active"
              className="album-link">
              Babymetal
            </Link>
          </div>
          <div className="list-item">
            <Link to="/home/albums/1"
              activeClassName="active"
              className="album-link">
              Babymetal (live @ Budokan)
            </Link>
          </div>
          <div className="list-item">
            <Link to="/home/albums/1"
              activeClassName="active"
              className="album-link">
              Road of Resistance
            </Link>
          </div>
        </div>
        <Songs />
      </div>
    );
  }
}
