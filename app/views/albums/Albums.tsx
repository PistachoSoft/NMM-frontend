import * as React from 'react';
import {Link} from 'react-router';
import {Album} from '../../models/Album';
import {AlbumsResponse} from '../../models/responses/AlbumsResponse';
import MusicService from '../../services/MusicService';

export interface IAlbumsState {
  albums: Array<Album>
}

export default class Albums extends React.Component<{}, IAlbumsState> {
  constructor() {
    super();

    this.state = {
      albums: []
    };
  }

  componentWillMount() {
    MusicService.getAllAlbums()
      .then(({albums}: AlbumsResponse) => {
        this.setState({
          albums
        });
      });
  }

  render() {
    return (
      <div className="view grid albums">
        {this.state.albums.map(this.renderAlbum)}
      </div>
    );
  }

  renderAlbum(album: Album) {
    return (
      <div className="grid-item"
          key={album.id}>
        <div className="album-preview">
          <div className="album-cover">
            <img src={album.image} className="album-cover-image"/>
          </div>
          <Link to={`/home/albums/${album.id}`}
              activeClassName="active"
              className="album-link">
            {album.name}
          </Link>
        </div>
      </div>
    );
  }
}
