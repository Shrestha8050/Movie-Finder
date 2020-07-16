import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div
          className='nav-wrapper'
          style={{ fontSize: '2em', fontWeight: '500', paddingLeft: '20px' }}
        >
          <Link to='/'>
            <div>Movie Finder</div>
          </Link>
        </div>
      </nav>
    );
  }
}
