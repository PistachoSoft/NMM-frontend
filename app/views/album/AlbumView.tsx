import * as React from 'react';
import {AlbumModel} from '../../models/AlbumModel';
import {ArtistModel} from '../../models/ArtistModel';
import {SongModel} from '../../models/SongModel';
import {SongsResponse} from '../../models/responses/SongsResponse';
import MusicService from '../../services/MusicService';
import Song from '../../components/song/Song';

export interface IAlbumState {
  artist?: ArtistModel;
  album?: AlbumModel;
  songs?: Array<SongModel>;
}

export default class AlbumView extends React.Component<{
  params: {
    id: string
  }
}, IAlbumState> {
  constructor() {
    super();

    this.state = {
      artist: {} as ArtistModel,
      album: {} as AlbumModel,
      songs: []
    };
  }

  componentWillMount() {
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
    .then(({songs}: SongsResponse) => {
      this.setState({
        songs
      });
    });
  }

  render() {
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
          {this.state.songs.map((song: SongModel) => {
            return <Song className="list-item" model={song} key={song.id}/>;
          })}
        </div>
      </div>
    );
  }
}
