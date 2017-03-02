import React, { Component } from 'react';
import NavLink from './NavLink'
import '../stylesheets/App.css';

export default class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <li><NavLink to="about">about</NavLink></li>
        <li><NavLink to="blog">blog</NavLink></li>
        {/*<li><NavLink to="contact">contact</NavLink></li>*/}
        <article className="contact">
          <a href="https://github.com/tmikeschu" target="_blank"><img src="http://www.iconsplace.com/icons/preview/white/github-256.png" alt="github"/></a>
          <a href="https://www.linkedin.com/in/tmikeschu" target="_blank"><img src="https://travellingmysteryguest.files.wordpress.com/2014/03/linkedin.png" alt="linkedin"/></a>
          <a href="mailto:tmikeschutte@gmail.com" target="_blank"><img src="http://www.clker.com/cliparts/5/S/U/Y/A/R/email-icon-hi.png" alt="github"/></a>
          <a href="https://twitter.com/tmikeschu" target="_blank"><img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png" alt="twitter"/></a>
        </article>
      </ul>
    );
  }
}
