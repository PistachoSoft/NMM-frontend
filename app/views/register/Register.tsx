import * as React from 'react';
import {Link} from 'react-router';

export default class Register extends React.Component<{}, {}> {
  render() {
    return (
      <div className="view register">
        <div className="form-block">
          Registration is not yet available
          <div>
            <Link to="/login"
                activeClassName="active"
                className="button">
              Back to login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
