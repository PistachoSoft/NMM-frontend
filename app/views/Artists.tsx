import * as React from 'react';
import {Link} from 'react-router';
import GridView from '../components/GridView';

export default class Artists extends GridView {
  render() {
    return (
      <div>
        Artists
        <Link to="/home/artists/1" activeClassName="active">Some artist</Link>
      </div>
    );
  }
}
