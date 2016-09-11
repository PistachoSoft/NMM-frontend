import * as React from 'react';
import {Link} from 'react-router';
import GridView from '../../components/GridView';

export default class Artists extends GridView {
  render() {
    return (
      <div className="view grid artists">
        <div className="grid-item">
          <div className="artist-preview">
            <div className="artist-cover">
              <img src="https://upload.wikimedia.org/wikipedia/en/3/36/Babymetalcover.jpg" className="artist-cover-image"/>
            </div>
            <Link to="/home/artists/1"
              activeClassName="active"
              className="artist-link">
              Babymetal
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
