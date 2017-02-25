import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class Blog extends Component {
  render() {
    return (
      <div className="container">
        <article className="blog">
          <a href="https://medium.com/@tmikeschutte"><img src="https://assets.ifttt.com/images/channels/1259075256/icons/on_color_large.png" alt="medium logo"/></a>
          <p>← Check me out on Medium.</p>
        </article>
      </div>
    );
  }
}
