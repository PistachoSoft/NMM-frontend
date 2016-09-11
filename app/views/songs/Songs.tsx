import * as React from 'react';
import {Song} from '../../models/Song';
import {SongsResponse} from '../../models/responses/SongsResponse';
import MusicService from '../../services/MusicService';

export interface ISongsState {
  songs: Array<Song>
}

export default class Songs extends React.Component<{}, ISongsState> {
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
        {this.state.songs.map(this.renderSong)}
      </div>
    );
  }

  renderSong(song: Song) {
    return (
      <div className="list-item song"
          key={song.id}>
        {song.id}. {song.name}
      </div>
    );
  }
}
