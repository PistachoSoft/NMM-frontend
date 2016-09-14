import * as React from 'react';
import {Link} from 'react-router';
import {IArtistModel} from '../../models/IArtistModel';
import {IArtistsResponse} from '../../models/responses/IArtistsResponse';
import MusicService from '../../services/MusicService';

export interface IArtistsState {
  artists: Array<IArtistModel>;
}

export default class ArtistsView extends React.Component<{}, IArtistsState> {
  public constructor() {
    super();

    this.state = {
      artists: []
    };
  }

  private renderArtist(artist: IArtistModel) {
    return (
      <div className="grid-item"
        key={artist.id}>
        <div className="artist-preview">
          <div className="artist-cover">
            <img src={artist.image} className="artist-cover-image"/>
          </div>
          <Link to={`/home/artists/${artist.id}`}
            className="artist-link">
            {artist.name}
          </Link>
        </div>
      </div>
    );
  }

  public componentWillMount() {
    MusicService.getAllArtists()
    .then(({artists}: IArtistsResponse) => {
      this.setState({
        artists
      });
    });
  }

  public render() {
    return (
      <div className="view grid artists">
        {this.state.artists.map(this.renderArtist)}
      </div>
    );
  }
}
