import * as React from 'react';
import {SongModel} from '../../models/SongModel';

export default class Song extends React.Component<{
  model: SongModel;
  className: string;
}, {}> {
  render() {
    return (
      <div className={`${this.props.className} song`}>
        {this.props.model.id}. {this.props.model.name}
      </div>
    );
  }
}
