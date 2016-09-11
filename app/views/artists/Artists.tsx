import * as React from 'react';
import {Link} from 'react-router';
import {Artist} from '../../models/Artist';
import {ArtistsResponse} from '../../models/responses/ArtistsResponse';
import MusicService from '../../services/MusicService';

export interface IArtistsState {
  artists: Array<Artist>
}

export default class Artists extends React.Component<{}, IArtistsState> {
  constructor() {
    super();

    this.state = {
      artists: []
    };
  }

  componentWillMount() {
    MusicService.getAllArtists()
    .then(({artists}: ArtistsResponse) => {
      this.setState({
        artists
      });
    });
  }

  render() {
    return (
      <div className="view grid artists">
        {this.state.artists.map(this.renderArtist)}
      </div>
    );
  }

  renderArtist(artist: Artist) {
    return (
      <div className="grid-item"
          key={artist.id}>
        <div className="artist-preview">
          <div className="artist-cover">
            <img src={artist.image} className="artist-cover-image"/>
          </div>
          <Link to={`/home/artists/${artist.id}`}
            activeClassName="active"
            className="artist-link">
            {artist.name}
          </Link>
        </div>
      </div>
    );
  }
}
