import React, { Component } from 'react';
import { Link } from 'react-router'
import '../stylesheets/App.css';

export default class Header extends Component {
  render() {
    return (
      <article className="header">
        <h2><Link to="/">Mike Schutte</Link></h2>
        <h3>software developer</h3>
      </article>
    );
  }
}
