import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/App.css';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><Link to="about">about</Link></li>
        <li><Link to="blog">blog</Link></li>
        <li><Link to="contact">contact</Link></li>
      </ul>
    );
  }
}
