import * as React from 'react';
import {Link} from 'react-router';

export default class Register extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Link to="/login" activeClassName="active">Submit</Link>
      </div>
    );
  }
}
