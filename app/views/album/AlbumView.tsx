import * as React from 'react';
import {IAlbumModel} from '../../models/IAlbumModel';
import {IArtistModel} from '../../models/IArtistModel';
import {ISongModel} from '../../models/ISongModel';
import {ISongsResponse} from '../../models/responses/ISongsResponse';
import MusicService from '../../services/MusicService';
import Song from '../../components/song/Song';

export interface IAlbumProps {
  params: {
    id: string;
  };
}

export interface IAlbumState {
  artist?: IArtistModel;
  album?: IAlbumModel;
  songs?: Array<ISongModel>;
}

export default class AlbumView extends React.Component<IAlbumProps, IAlbumState> {
  public constructor() {
    super();

    this.state = {
      artist: {} as IArtistModel,
      album: {} as IAlbumModel,
      songs: []
    };
  }

  public componentWillMount() {
    const albumId = +this.props.params.id;

    MusicService.getAlbumById(albumId)
    .then((album) => {
      this.setState({
        album
      });

      return MusicService.getArtistById(album.artistId);
    })
    .then((artist) => {
      this.setState({
        artist
      });
    });

    MusicService.getSongsByAlbum(albumId)
    .then(({songs}: ISongsResponse) => {
      this.setState({
        songs
      });
    });
  }

  public render() {
    return (
      <div className="view album">
        <div className="album-info-large">
          <div className="album-cover">
            <img src={this.state.album.image} className="album-cover-image"/>
          </div>
          <div className="album-details">
            <div className="album-detail">{this.state.album.name}</div>
            <div className="album-detail">{this.state.artist.name}</div>
            <div className="album-detail">{this.state.songs.length} songs</div>
            <div className="album-detail">{this.state.album.duration}</div>
          </div>
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
