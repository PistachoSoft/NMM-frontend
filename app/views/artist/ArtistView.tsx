import * as React from 'react';
import {Link} from 'react-router';
import MusicService from '../../services/MusicService';
import {IAlbumsResponse} from '../../models/responses/IAlbumsResponse';
import {ISongsResponse} from '../../models/responses/ISongsResponse';
import {IAlbumModel} from '../../models/IAlbumModel';
import {ISongModel} from '../../models/ISongModel';
import {IArtistModel} from '../../models/IArtistModel';
import Song from '../../components/song/Song';

export interface IArtistProps {
  params: {
    id: string;
  };
}

export interface IArtistState {
  artist?: IArtistModel;
  albums?: Array<IAlbumModel>;
  songs?: Array<ISongModel>;
}

export default class ArtistView extends React.Component<IArtistProps, IArtistState> {
  public constructor() {
    super();

    this.state = {
      artist: {} as IArtistModel,
      albums: [],
      songs: []
    };
  }

  private renderAlbum(album: IAlbumModel) {
    return (
      <div className="list-item album"
        key={album.id}>
        <Link to={`/home/albums/${album.id}`}
          className="album-link">
          {album.name}
        </Link>
      </div>
    );
  }

  public componentWillMount() {
    const artistId = +this.props.params.id;

    MusicService.getArtistById(artistId)
    .then((artist) => {
      this.setState({
        artist
      });
    });

    MusicService.getAlbumsByArtist(artistId)
    .then(({albums}: IAlbumsResponse) => {
      this.setState({
        albums
      });
    });

    MusicService.getSongsByArtist(artistId)
    .then(({songs}: ISongsResponse) => {
      this.setState({
        songs
      });
    });
  }

  public render() {
    return (
      <div className="view artist">
        <div className="artist-info-large">
          <div className="artist-cover">
            <img src={this.state.artist.image} className="artist-cover-image"/>
          </div>
          <div className="artist-details">
            <div className="artist-detail">{this.state.artist.name}</div>
            <div className="artist-detail">{this.state.albums.length} albums</div>
          </div>
        </div>
        <div className="list albums">
          {this.state.albums.map(this.renderAlbum)}
        </div>
        <div className="view list songs">
          {this.state.songs.map((song: ISongModel) => {
            return <Song className="list-item" model={song} key={song.id}/>;
          })}
        </div>
      </div>
    );
  }
}
