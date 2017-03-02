import React, { Component } from 'react';
import '../stylesheets/App.css';

export default class Contact extends Component {
  render() {
    return (
      <article className="contact">
        <a href="https://github.com/tmikeschu" target="_blank"><img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github"/></a>
        <a href="https://www.linkedin.com/in/tmikeschu" target="_blank"><img src="https://travellingmysteryguest.files.wordpress.com/2014/03/linkedin.png" alt="linkedin"/></a>
        <a href="mailto:tmikeschutte@gmail.com" target="_blank"><img src="http://www.clker.com/cliparts/5/S/U/Y/A/R/email-icon-hi.png" alt="github"/></a>
        <a href="https://twitter.com/tmikeschu" target="_blank"><img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png" alt="twitter"/></a>
      </article>
    );
  }
}
