import * as React from 'react';
import {SongModel} from '../../models/SongModel';

export interface ISongProps {
  model: SongModel;
  className: string;
}

export default class Song extends React.Component<ISongProps, {}> {
  render() {
    return (
      <div className={`${this.props.className} song`}>
        {this.props.model.id}. {this.props.model.name}
      </div>
    );
  }
}
