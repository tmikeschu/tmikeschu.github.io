import React from 'react'
import { Link } from 'react-router'
import '../stylesheets/App.css'

const Header = () => (
  <article className="header">
    <section>
      <h2><Link to="/">Mike Schutte</Link></h2>
      <h3>software developer</h3>
    </section>
  </article>
)

export default Header
