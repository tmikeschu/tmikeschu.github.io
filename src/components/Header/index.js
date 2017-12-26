import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Header = () => (
  <article className="Header">
    <h2 className="Header__main"><Link to="/">Mike Schutte</Link></h2>
    <h3 className="Header__sub">software developer</h3>
  </article>
)

export default Header
