import * as React from 'react';
import {Link} from 'react-router';
import {IAlbumModel} from '../../models/IAlbumModel';
import {IAlbumsResponse} from '../../models/responses/IAlbumsResponse';
import MusicService from '../../services/MusicService';

export interface IAlbumsState {
  albums: Array<IAlbumModel>;
}

export default class AlbumsView extends React.Component<{}, IAlbumsState> {
  public constructor() {
    super();

    this.state = {
      albums: []
    };
  }

  private renderAlbum(album: IAlbumModel) {
    return (
      <div className="grid-item"
        key={album.id}>
        <div className="album-preview">
          <div className="album-cover">
            <img src={album.image} className="album-cover-image"/>
          </div>
          <Link to={`/home/albums/${album.id}`}
            className="album-link">
            {album.name}
          </Link>
        </div>
      </div>
    );
  }

  public componentWillMount() {
    MusicService.getAllAlbums()
      .then(({albums}: IAlbumsResponse) => {
        this.setState({
          albums
        });
      });
  }

  public render() {
    return (
      <div className="view grid albums">
        {this.state.albums.map(this.renderAlbum)}
      </div>
    );
  }
}
