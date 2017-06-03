import React from 'react'
import NavLink from './NavLink'
import '../stylesheets/App.css'

const Nav = () => (
  <ul className="nav">
    <div className="links">
      <li><NavLink to="about">about</NavLink></li>
      <li><NavLink to="blog">blog</NavLink></li>
    </div>
    <div>
      <img src="https://www.turing.io/sites/default/files/styles/graduate_full_profile/public/IMG_0689-1_0.jpg?itok=MI9LeK3w" alt="profile"/>
      <article className="contact">
        <a href="https://github.com/tmikeschu" target="_blank"><img src="http://www.iconsplace.com/icons/preview/white/github-256.png" alt="github"/></a>
        <a href="https://www.linkedin.com/in/tmikeschu" target="_blank"><img src="https://travellingmysteryguest.files.wordpress.com/2014/03/linkedin.png" alt="linkedin"/></a>
        <a href="mailto:tmikeschutte@gmail.com" target="_blank"><img src="http://www.clker.com/cliparts/5/S/U/Y/A/R/email-icon-hi.png" alt="github"/></a>
        <a href="https://twitter.com/tmikeschu" target="_blank"><img src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png" alt="twitter"/></a>
      </article>
    </div>
  </ul>
)

export default Nav
