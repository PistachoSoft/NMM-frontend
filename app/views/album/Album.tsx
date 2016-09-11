import * as React from 'react';
import Songs from '../../views/songs/Songs';

export default class Album extends React.Component<{}, {}> {
  render() {
    return (
      <div className="view album">
        <div className="album-info-large">
          <div className="album-cover">
            <img src="http://assets.blabbermouth.net.s3.amazonaws.com/media/babymetalmetalresistancecdbigger.jpg" className="album-cover-image"/>
          </div>
          <div className="album-details">
            <div className="album-detail">Road of Resistance</div>
            <div className="album-detail">Babymetal</div>
            <div className="album-detail">12 songs</div>
            <div className="album-detail">54:09</div>
          </div>
        </div>
        <Songs />
      </div>
    );
  }
}
