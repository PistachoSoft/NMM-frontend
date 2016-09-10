import * as React from 'react';
import {Link} from 'react-router';
import GridView from '../components/GridView';

export default class Albums extends GridView {
  render() {
    return (
      <div>
        Albums
        <Link to="/home/albums/1" activeClassName="active">Some album</Link>
      </div>
    );
  }
}
