import React from 'react'
import Header from './Header.jsx'
import Nav from './Nav.jsx'
import '../stylesheets/App.css'

const App = props => (
  <div className="container">
    <article className="main">
      <Header />
      { props.children }
    </article>
    <Nav />
  </div>
)

export default App

