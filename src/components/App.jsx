import React from "react"
import Header from "./Header"
import Nav from "./Nav"
import "./index.css"

const App = props => (
  <div className="App">
    <article className="App__main">
      <Header />
      {props.children}
    </article>
    <Nav />
  </div>
)

export default App
