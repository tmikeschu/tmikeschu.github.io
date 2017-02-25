import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class Footer extends Component {
  render() {
    return (
      <article className="footer">
        <h3>builder</h3>
        <h3>runner</h3>
        <h3>reader</h3>
        <h3>writer</h3>
        <h3>listener</h3>
      </article>
    );
  }
}
