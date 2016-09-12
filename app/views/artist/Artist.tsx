import * as React from 'react';
import {Link} from 'react-router';
import MusicService from '../../services/MusicService';
import {AlbumsResponse} from '../../models/responses/AlbumsResponse';
import {SongsResponse} from '../../models/responses/SongsResponse';
import {Album} from '../../models/Album';
import {Song} from '../../models/Song';
import {Artist as ArtistModel} from '../../models/Artist';

export interface IArtistState {
  artist?: ArtistModel;
  albums?: Array<Album>;
  songs?: Array<Song>;
}

export default class Artist extends React.Component<{
  params: {
    id: string
  }
}, IArtistState> {
  constructor() {
    super();

    this.state = {
      artist: {} as ArtistModel,
      albums: [],
      songs: []
    };
  }

  componentWillMount() {
    const artistId = +this.props.params.id;

    MusicService.getArtistById(artistId)
    .then((artist) => {
      this.setState({
        artist
      });
    });

    MusicService.getAlbumsByArtist(artistId)
    .then(({albums}: AlbumsResponse) => {
      this.setState({
        albums
      });
    });

    MusicService.getSongsByArtist(artistId)
    .then(({songs}: SongsResponse) => {
      this.setState({
        songs
      });
    });
  }

  render() {
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
          {this.state.songs.map(this.renderSong)}
        </div>
      </div>
    );
  }

  private renderAlbum(album: Album) {
    return (
      <div className="list-item"
          key={album.id}>
        <Link to={`/home/albums/${album.id}`}
            activeClassName="active"
            className="album-link">
          {album.name}
        </Link>
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
