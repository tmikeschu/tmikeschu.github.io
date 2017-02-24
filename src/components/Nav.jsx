import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/App.css';

export default class Nav extends Component {
  render() {
    return (
      <article className="nav">
        <ul>
          <li><Link to="about">About</Link></li>
          <li><Link to="blog">Blog</Link></li>
          <li><Link to="contact">Contact</Link></li>
        </ul>
      </article>
    );
  }
}
