// Libraries
import React from 'react'

// Components
import Header from './Header.jsx'
import Nav from './Nav.jsx'

//  Styles
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

