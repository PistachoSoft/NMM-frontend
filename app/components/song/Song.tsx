import * as React from 'react';
import {ISongModel} from '../../models/ISongModel';

export interface ISongProps {
  model: ISongModel;
  className: string;
}

export default class Song extends React.Component<ISongProps, {}> {
  public render() {
    return (
      <div className={`${this.props.className} song`}>
        {this.props.model.id}. {this.props.model.name}
      </div>
    );
  }
}
