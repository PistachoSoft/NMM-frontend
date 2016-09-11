import * as React from 'react';
import {Link} from 'react-router';
import GridView from '../../components/GridView';

export default class Albums extends GridView {
  render() {
    return (
      <div className="view grid albums">
        <div className="grid-item">
          <div className="album-preview">
            <div className="album-cover">
              <img src="http://assets.blabbermouth.net.s3.amazonaws.com/media/babymetalmetalresistancecdbigger.jpg" className="album-cover-image"/>
            </div>
            <Link to="/home/albums/1"
                activeClassName="active"
                className="album-link">
              Babymetal
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="album-preview">
            <div className="album-cover">
              <img src="http://assets.blabbermouth.net.s3.amazonaws.com/media/babymetalmetalresistancecdbigger.jpg" className="album-cover-image"/>
            </div>
            <Link to="/home/albums/1"
                activeClassName="active"
                className="album-link">
              Babymetal (live @ Budokan)
            </Link>
          </div>
        </div>
        <div className="grid-item">
          <div className="album-preview">
            <div className="album-cover">
              <img src="http://assets.blabbermouth.net.s3.amazonaws.com/media/babymetalmetalresistancecdbigger.jpg" className="album-cover-image"/>
            </div>
            <Link to="/home/albums/1"
                activeClassName="active"
                className="album-link">
              Road of Resistance
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
