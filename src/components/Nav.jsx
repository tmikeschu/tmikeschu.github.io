import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/App.css';

class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          {/*<li><a href="/about">The Trip</a></li>*/}
          <li><Link to="about">About</Link></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </article>
    );
  }
}

export default Nav;
