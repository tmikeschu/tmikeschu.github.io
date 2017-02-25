import React, { Component } from 'react';
import NavLink from './NavLink'
import '../stylesheets/App.css';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><NavLink to="about">about</NavLink></li>
        <li><NavLink to="blog">blog</NavLink></li>
        <li><NavLink to="contact">contact</NavLink></li>
      </ul>
    );
  }
}
