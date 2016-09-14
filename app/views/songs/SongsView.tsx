import * as React from 'react';
import {ISongModel} from '../../models/ISongModel';
import {ISongsResponse} from '../../models/responses/ISongsResponse';
import MusicService from '../../services/MusicService';
import Song from '../../components/song/Song';

export interface ISongsState {
  songs: Array<ISongModel>;
}

export default class SongsView extends React.Component<{}, ISongsState> {
  public constructor() {
    super();

    this.state = {
      songs: []
    };
  }

  public componentWillMount() {
    MusicService.getAllSongs()
    .then(({songs}: ISongsResponse) => {
      this.setState({
        songs
      });
    });
  }

  public render() {
    return (
      <div className="view list songs">
        {this.state.songs.map((song: ISongModel) => {
          return <Song className="list-item" model={song} key={song.id}/>;
        })}
      </div>
    );
  }
}
