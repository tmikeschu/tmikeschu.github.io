import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class Home extends Component {
  render() {
    return (
      <article className="home">
        <section className="video">
          <div>
            <p>A little bit about my passion...</p>
          </div>
          <iframe src="https://player.vimeo.com/video/202161614" width="640" height="360" frameBorder="0" allowFullScreen></iframe>
        </section>
      </article>
    );
  }
}
