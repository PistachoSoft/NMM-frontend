import * as React from 'react';
import Songs from '../../views/songs/Songs';
import {Album as AlbumModel} from '../../models/Album';
import {Artist as ArtistModel} from '../../models/Artist';
import {Song} from '../../models/Song';
import {SongsResponse} from '../../models/responses/SongsResponse';
import MusicService from '../../services/MusicService';

export interface IAlbumState {
  artist?: ArtistModel;
  album?: AlbumModel;
  songs?: Array<Song>;
}

export default class Album extends React.Component<{
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
          {this.state.songs.map(this.renderSong)}
        </div>
      </div>
    );
  }

  private renderSong(song: Song) {
    return (
      <div className="list-item song"
        key={song.id}>
        {song.id}. {song.name}
      </div>
    );
  }
}
