import React from "react"
import { NavLink } from "react-router-dom"
import "./styles.css"

const makeNavLink = to => (
  <NavLink
    to={`/${to}`}
    key={to}
    activeClassName="Nav__link--active"
    className="Nav__link"
  >
    {to}
  </NavLink>
)

const links = ["about", "blog"]
const navLinks = links.map(link => makeNavLink(link))

const Nav = () => (
  <ul className="Nav">
    <div className="Nav__links">{navLinks}</div>

    <div className="Nav__contact">
      <img className="Nav__image" src="headshot.jpg" alt="profile" />
      <article className="Nav__contactSocial">
        <a
          href="https://github.com/tmikeschu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="github.png" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/tmikeschu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://travellingmysteryguest.files.wordpress.com/2014/03/linkedin.png"
            alt="linkedin"
          />
        </a>
        <a
          href="mailto:tmikeschutte@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="http://www.clker.com/cliparts/5/S/U/Y/A/R/email-icon-hi.png"
            alt="github"
          />
        </a>
        <a
          href="https://twitter.com/tmikeschu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="http://icons.iconarchive.com/icons/uiconstock/socialmedia/512/Twitter-icon.png"
            alt="twitter"
          />
        </a>
      </article>
    </div>
  </ul>
)

export default Nav
