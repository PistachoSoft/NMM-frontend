import * as React from 'react';
import {SongModel} from '../../models/SongModel';
import {SongsResponse} from '../../models/responses/SongsResponse';
import MusicService from '../../services/MusicService';
import Song from '../../components/song/Song';

export interface ISongsState {
  songs: Array<SongModel>
}

export default class SongsView extends React.Component<{}, ISongsState> {
  constructor() {
    super();

    this.state = {
      songs: []
    };
  }

  componentWillMount() {
    MusicService.getAllSongs()
    .then(({songs}: SongsResponse) => {
      this.setState({
        songs
      });
    });
  }

  render() {
    return (
      <div className="view list songs">
        {this.state.songs.map((song: SongModel) => {
          return <Song className="list-item" model={song} key={song.id}/>;
        })}
      </div>
    );
  }
}
