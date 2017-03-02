import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class Blog extends Component {
  render() {
    return (
      <article className="blog">
        <a href="https://medium.com/@tmikeschutte" target="_blank"><img src="https://assets.ifttt.com/images/channels/1259075256/icons/on_color_large.png" alt="medium logo"/></a>
        <span>←</span>
        <span>↑</span>
        <p> Find me on Medium.</p>
      </article>
    );
  }
}
